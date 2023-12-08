import { Button, TextField } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import { useState } from 'react'

const ChatFooter = ({ socket }) => {
  const [message, setMessage] = useState('')

  const handleSendMessage = (e) => {
    e.preventDefault()
    if (message.trim() && localStorage.getItem('userName')) {
      socket.emit('message', {
        text: message,
        name: localStorage.getItem('userName'),
        id: `${socket.id}${Math.random()}`,
        socketID: socket.id
      })
    }
    setMessage('')
  }

  return (
    <form onSubmit={handleSendMessage}>
      <div className='grid w-full gap-2'>
        <TextField
          label='Write message'
          margin='normal'
          id='message'
          autoComplete={'off'}
          name='message'
          autoFocus
          type='text'
          placeholder='Write message'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button
          type='submit'
          color='success'
          variant='contained'
          endIcon={<SendIcon />}
        >
          SEND
        </Button>
      </div>
    </form>
  )
}

export default ChatFooter
