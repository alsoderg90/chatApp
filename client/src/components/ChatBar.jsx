import { Avatar, Badge, Link } from '@mui/material'
import { deepOrange } from '@mui/material/colors'
import React, { useState, useEffect } from 'react'

const ChatBar = ({ socket }) => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    socket.on('newUserResponse', (data) => setUsers(data))
  }, [socket, users])

  return (
    <div className='border-r bg-gray-100/40'>
      <div className='flex h-full flex-col gap-2'>
        <div className='flex h-[60px] items-center border-b px-6'>
          <h6>ACTIVE USERS</h6>
        </div>
        <div className='flex-1 overflow-auto py-2'>
          <ul className='space-y-4 px-4'>
            {users.map((user) => (
              <li
                className='className="flex items-center gap-3"'
                key={user.socketID}
              >
                <Badge
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                  }}
                  badgeContent='Online'
                  color='success'
                >
                  <Avatar
                    sx={{ bgcolor: deepOrange[500] }}
                    className='h-8 w-8 rounded-full'
                    src='/placeholder.svg?height=32&width=32'
                  >
                    {user.userName[0]}
                  </Avatar>
                </Badge>
                <span className='font-medium px-4'>
                  {user.userName}
                </span>{' '}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ChatBar
