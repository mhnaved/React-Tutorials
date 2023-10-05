import React from 'react'
import { useState } from 'react';

function FormValidation() {
  // const [name, setName] = useState("");
  //    const handleSubmit =(event) =>{
  //     event.preventDefault();
    // alert(' A form was submitted: ' );
    // setTimeout(() => {
    //   alert(`The name you entered was: ${name}`)
    // }, 2000);
    // alert(`The name you entered was: ${name}`)


    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      alert(inputs);
  }
  return (
    <div>
      {/* <form onSubmit={handleSubmit}>
  <label>
    Name:
    <input type="text"  value={name}
          onChange={(e) => setName(e.target.value)} />
  </label> <br /> */}
  {/* <label>
    Password:
    <input type="password" name="password" />
  </label>  <br /> */}
  {/* <input type="submit" value="Submit" />
</form> */}

{/* Write a form with two input fields: */}

<form onSubmit={handleSubmit}>
      <label>Enter your name:
      <input 
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
      />
      </label>
      <label>Enter your age:
        <input 
          type="number" 
          name="age" 
          value={inputs.age || ""} 
          onChange={handleChange}
        />
        </label>
        <input type="submit" />
    </form>

    </div>
  )
}

export default FormValidation;

{/* <input type="text" value={namae} onChange={(e)=>setName(e.target.value)} /> 

const handleSubmit = (event)=>{
  event.preventDefault();
setTimeout(()=>{
  alert(my form hhas been submited)
},3000)
}
*/}

