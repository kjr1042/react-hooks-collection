import React from 'react'
import { useState } from 'react';

const HandlingEventWithState = () => {

    const [count,setCount] = useState(0)
    const increment =() =>
    {
        setCount(count+1);

    }
  return (
    <div>
        <p>HandlingEventWithState</p>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
    </div>
  )
}

export default HandlingEventWithState