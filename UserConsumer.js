import React from 'react'
import { useContext } from 'react'
import { AppContext } from './UserContext'

const UserConsumer = () => {
    const userData = useContext(AppContext);

  return (
    <div>
        <h3>Hello, {userData.firstName} {userData.lastName} good day!.. {Date()}</h3>
    </div>
  )
}

export default UserConsumer