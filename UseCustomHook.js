import React, { useState } from 'react'
import useLoacalStrorage from './useLoacalStrorage'

const UseCustomHook = () => {

    const [count, setCount] = useLoacalStrorage("count",0);


  return (
    <div>
        <div>UseCustomHook</div>
        <h2> Counter : {count}</h2>
        <button className='btn btn-sm btn-primary'onClick={()=>setCount(count+1)}>Increment</button>
    </div>
  )
}

export default UseCustomHook