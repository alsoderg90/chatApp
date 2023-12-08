import { Toast } from 'react-bootstrap'

const ChatBody = ({ messages }) => {
  return (
    <div className='flex-1 overflow-auto space-y-4'>
      {messages.map((message) =>
        message.name === localStorage.getItem('userName') ? (
          <div
            className='flex items-start justify-end gap-2'
            key={message.id}
          >
            <Toast>
              <Toast.Header>
                <img
                  src='holder.js/20x20?text=%20'
                  className='rounded me-2'
                  alt=''
                />
                <strong className='me-auto'>You</strong>
                <small>
                  {new Date(message.time).toLocaleDateString(
                    'en-US',
                    {
                      year: 'numeric',
                      month: '2-digit',
                      day: '2-digit',
                      hour: '2-digit',
                      minute: '2-digit'
                    }
                  )}
                </small>
              </Toast.Header>
              <Toast.Body>{message.text}</Toast.Body>
            </Toast>
          </div>
        ) : (
          <div
            className='flex items-start justify-start gap-2'
            key={message.id}
          >
            <Toast>
              <Toast.Header>
                <img
                  src='holder.js/20x20?text=%20'
                  className='rounded me-2'
                  alt=''
                />
                <strong>{message.name}</strong>
                <small>11 mins ago</small>
              </Toast.Header>
              <Toast.Body>{message.text}</Toast.Body>
            </Toast>
          </div>
        )
      )}
    </div>
  )
}

export default ChatBody
