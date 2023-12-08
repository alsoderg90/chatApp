import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import socketIO from 'socket.io-client'
import ChatPage from './components/ChatPage'
import 'bootstrap/dist/css/bootstrap.min.css'

const socket = socketIO.connect(
  process.env.NODE_ENV === 'production'
    ? process.env.REACT_APP_PROD_ENVIRONMENT
    : 'http://localhost:4000'
)
const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<Home socket={socket} />} />
          <Route
            path='/chat'
            element={<ChatPage socket={socket} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
