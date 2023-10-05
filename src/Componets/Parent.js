import React,{useCallback, useState} from 'react'
import Child from './Child';


const Parent = ()=> {
    const [counterOne, setcounterOne] =useState(0);
    const [countertwo, setcountertwo] =useState([]);
    const incrementOne = ()=> {
        setcounterOne(counterOne + 1); 
    }
    const fun =useCallback(()=>{
        console.log("Hello Naved");
    },countertwo);

  return (
    <div>
        <Child countertwo = {countertwo} fun={fun} />
      
       <button onClick={incrementOne}>Counter = {counterOne}</button>
       
    </div>
  )
}

export default Parent