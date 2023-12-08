import { useEffect, useState } from 'react'
import ChatBar from './ChatBar'
import ChatBody from './ChatBody'
import ChatFooter from './ChatFooter'
import ChatHeader from './ChatHeader'
import { ThemeProvider, createTheme } from '@mui/material'

const ChatPage = ({ socket }) => {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    socket.on('messageResponse', (data) =>
      setMessages([...messages, data])
    )
  }, [socket, messages])

  const theme = createTheme({
    palette: {
      success: {
        main: '#22C55E',
        contrastText: '#FFFFFF'
      }
      // Add other customizations as needed
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <div className='grid min-h-screen w-full grid-cols-[280px_1fr]'>
        <ChatBar socket={socket} />
        <div className='flex flex-col'>
          <ChatHeader />
          <main className='flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6'>
            <ChatBody messages={messages} />
            <ChatFooter socket={socket} />
          </main>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default ChatPage
