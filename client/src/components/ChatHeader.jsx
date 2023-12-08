import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const ChatHeader = () => {
  const navigate = useNavigate()

  const handleLeaveChat = () => {
    localStorage.removeItem('userName')
    navigate('/')
    window.location.reload()
  }
  return (
    <header className='flex bg-black items-center justify-between h-[60px] border-b px-6'>
      <h5 className='font-semibold text-white text-lg md:text-2xl'>
        Chat App
      </h5>
      <Button
        color='error'
        variant='contained'
        onClick={handleLeaveChat}
      >
        LEAVE CHAT
      </Button>
    </header>
  )
}

export default ChatHeader
