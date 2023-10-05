import React,  { useState, useEffect } from 'react';

function HooksEffect(){
  const [count, setCount] = useState(0);

  // similar to componentDidMount and componentDidUpdate:
  useEffect(()=> {
    document.title = " useEffect";
    setTimeout(()=>{
      alert('Hey!! This is called useEffect Hook.');
    },2000);
  });

  return (
    <div>
        <p>You clicked {count} times</p>
        <button onClick={()=> setCount(count + 1)}>
            Click me!!
        </button>
    </div>
  );
}

export default HooksEffect

// useEffect(()=>{
//   document.title= "React useeffect"
// })
