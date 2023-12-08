import {
  Box,
  Button,
  Container,
  TextField,
  Typography
} from '@mui/material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = ({ socket }) => {
  const navigate = useNavigate()
  const [userName, setUserName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    localStorage.setItem('userName', userName)
    socket.emit('newUser', { userName, socketID: socket.id })
    navigate('/chat')
  }
  return (
    <Container>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Typography component='h2' variant='h5'>
          Sign in to Open Chat
        </Typography>
        <Box component='form' onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            label='Username'
            margin='normal'
            required
            fullWidth
            id='username'
            name='username'
            autoFocus
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2 }}
          >
            SIGN IN
          </Button>
        </Box>
      </Box>
    </Container>
  )
}

export default Home
