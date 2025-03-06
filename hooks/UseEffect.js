import React, {useState,useEffect} from 'react'

const UseEffect = () => {
    const [count,setCount] =useState(0);

    const countUpdate= (val)=>
    {
        if (val==="inc") return setCount(count+1);
        if (val==="dec") return count > 0 ? setCount(count-1):setCount(0);


    }

    useEffect(()=>{
        document.title = count;
        // runs on every render
    });

    // useEffect(()=>{
    //     document.title = count;
    //     // runs on first render
    // },[]);

    // useEffect(()=>{
    //     document.title = count;
    //     // runs on first render and any time dependency value will change..
    // },[count]);



  return (
    <div>
        <h1 className='display-6 primay'>UseEffect</h1>
        <div className='container-fluid'>
            <p className='diplay-5'>{count}</p>
            <button type='button' className='btn btn-success btn-md' onClick={()=>countUpdate("inc")}>Increment</button>
            &nbsp; &nbsp; &nbsp;
            <button type='button' className='btn btn-danger btn-md' onClick={()=>countUpdate("dec")}>Decrement</button>

        </div>

    </div>
  )
}

export default UseEffect