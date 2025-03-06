import {useState, useEffect} from 'react'

const useLoacalStrorage = (key, intialValue) => {

    const [value, setValue] =useState(()=>{
        const storedValue = localStorage.getItem(key);
        return storedValue ? JSON.parse(storedValue) : intialValue;

    })

    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(value));
    },[key,value])

  return [value,setValue];
}

export default useLoacalStrorage