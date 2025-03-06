import React from 'react'

const FunctionWithParamaeterComponent = () => {
    const handleGreeting =(name) =>
    {
        alert(`Hello, ${name}!`)
    }
  return (
    <div className='App'>

        <p>FunctionWithParamaeterComponent</p>
        <button onClick={()=> handleGreeting("Abhishek")}> Greet User</button>

    </div>

  )
}

export default FunctionWithParamaeterComponent