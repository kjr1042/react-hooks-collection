import React from 'react'
import { useState } from 'react'

const HandlingInputEvent = () => {

    const handleChange = (event)=>{
        setUsername(event.target.value);
        console.log(event.target.value);
    };

    const[username, setUsername] =useState("");

  return (
    <div>
        <p>HandlingInputEvent</p>
        <input type='text' value={username} onChange={handleChange}></input>
        <p>User Name : {username}</p>

    </div>
  )
}

export default HandlingInputEvent