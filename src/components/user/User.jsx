import React from 'react'
import { useSelector } from 'react-redux'
import { selectUserName } from '../../features/userSlice'

const User = () => {
    const username=useSelector(selectUserName)
  return (
    <div>
      welcome {username}
    </div>
  )
}

export default User
