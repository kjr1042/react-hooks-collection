import React from 'react'

const Child = (user) => {
    const {firstName,lastName} = user;
  return (
    <div>
    <h1 className='display-2 text-success'>Child</h1>
    <h3>Hello once again from child, {firstName} {lastName}, Good Day {Date()} </h3>
    </div>
  )
}

export default Child