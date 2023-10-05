import React from 'react'
import { useState } from 'react'


// function Counter() {
// const[initialValue, updateValue] = useState(0);
// const handleClic = ()=> {
//     updateValue(initialValue + 1)
// }
//   return (
//     <div>
//         <div>  {initialValue}</div>
    


//       <button onClick={handleClic}>Counter</button>
    
      
//     </div>
//   )

// }

// export default Counter



function Counter() {

const[currentValue, updateValue] = useState(0);
const inc =() =>{
  updateValue(currentValue + 1);
}

const dec =() =>{
  updateValue((prevCount) => (Math.max(prevCount -1 ,1)));
}



  return (
    <div>
       
    <div> {currentValue} </div>


      <button onClick={inc}>Increment </button> 
      <button onClick={dec}>Decrement</button>
    
      
    </div>
  )
}

export default Counter
