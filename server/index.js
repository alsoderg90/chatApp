const express = require('express')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 4000

const buildPath = path.join(__dirname, '../client/build')

app.use(express.static(buildPath))

const http = require('http').Server(app)
const cors = require('cors')

let users = []

app.use(cors())

const socketIO = require('socket.io')(http, {
  cors: {
    origin: process.env.ALLOWED_ORIGIN || 'http://localhost:3000'
  }
})

app.get('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'))
})

socketIO.on('connection', (socket) => {
  console.log(socket)
  console.log(`⚡: ${socket.id} user just connected!`)

  socket.on('message', (data) => {
    socketIO.emit('messageResponse', { ...data, time: Date.now() })
  })

  socket.on('newUser', (data) => {
    users.push(data)
    socketIO.emit('newUserResponse', users)
    console.log(users)
  })

  socket.on('disconnect', () => {
    console.log('🔥: A user disconnected')
    users = users.filter((user) => user.socketID !== socket.id)
    socketIO.emit('newUserResponse', users)
    socket.disconnect()
  })
})

app.get('/api', (req, res) => {
  res.json({
    message: 'Hello world'
  })
})

http.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})
