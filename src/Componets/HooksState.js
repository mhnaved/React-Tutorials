// import React from 'react';
import React,  { useState } from 'react';
// import ReactDOM from 'react-dom'


function HooksState(){
    
    // const [count,setCount] = useState(0);
    const [initialValue,updateValue] = useState(0);
    const Incr = ()=>{
        updateValue(initialValue + 1)
    }
    
    // console.log(count);

    return (

        <div>
            <p>You clicked {initialValue} times</p>
         
            <button onClick={Incr}>
                Click me
            </button>
        </div>
    );
}


export default HooksState