import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import noteContext from "../context/noteContext";

function ReactEvents(){
    const shoot = ()=>{
        alert('Great shot!');
    }
     const a = useContext(noteContext);
     useEffect(()=> {
        a.update();
     })
    return(
        <>
        <button onClick={shoot}>Take the shot!</button>
        <h1> React Context</h1>

        <div> 
               My name is {a.state.name} and i have completed {a.state.class}
               
        </div>
       
      
        </>
    );
}
/* const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Football />); */

export default ReactEvents


