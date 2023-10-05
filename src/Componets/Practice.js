import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function Practice() {
    const[initialValue,updateValue] = useState(0);
    useEffect(()=>{
console.log("naved talib")
// document.title = "React Tutorial"
    });
    useEffect(()=>{
      console.log("Ashi")
    })
  return (
    <div>
      <p>you clicked {initialValue}</p>
      <button onClick={()=>updateValue(initialValue)}></button>
      <button onClick={()=>updateValue(initialValue + 1)}></button>
    </div>
  )
}

export default Practice;



