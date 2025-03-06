import React from 'react'
import Child from './Child'

const Parent = ({user}) => {
    const {firstName,lastName} = user;
  return (
    <div>
    <h1 className='display-2 text-primary'>Parent</h1>
    <h3>Hello, {firstName} {lastName} ,Good Day {Date()} </h3>
    <Child {...user}/>
    </div>
  )
}

export default Parent
  