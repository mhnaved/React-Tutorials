import React,  {   useRef  } from 'react';
// import { useState, useEffect, useRef } from "react";

// Use useRef to focus the input:

function HooksuseRef() {
    const inputElement = useRef();
  
    const focusInput = () => {
      inputElement.current.focus();
      // alert("Hii Naved")
    };
  
    return (
      <>
        <input type="text" ref={inputElement} />
        <button onClick={focusInput}>Focus Input</button>
      </>
    );
  }

  export default HooksuseRef



// Use useRef to track application renders.

  // function HooksuseRef() {
  //   const [inputValue, setInputValue] = useState("");
  //   const count = useRef(0);
  
  //   useEffect(() => {
  //     count.current = count.current + 1;
  //   });
  
  //   return (
  //     <>
  //       <input
  //         type="text"
  //         value={inputValue}
  //         onChange={(e) => setInputValue(e.target.value)}
  //       />
  //       <h1>Render Count: {count.current}</h1>
  //       <p>{inputValue}</p>
  //     </>
  //   );
  // }

  // export default HooksuseRef

  // const[inputValue, setInputValue]= useState("")
  // const count = useRef(0
  //   useEffect(()=>{
  //     count.current = count.current +;
  //   })
  //   <input type="text" value={inputValue}
  //   onChange= {(e)=>setInputValue(e.target.value)}/>

  // const inputElement = useRef();
  // focusInput = ()=>{
  //   alert("Hii Naved")

  // }
  // <input type="text" ref={inputElement} />