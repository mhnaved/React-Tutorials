import React from "react";
import { useContext } from "react";
import noteContext from "../context/noteContext";


function Parag(){
    const b = useContext(noteContext);
    return (
        <div>
            <h2>Hello,How's You!!.Have a nice day!!</h2>
            <h4>My name is {b.state.name}</h4>
    
        </div>
      );

}

export default Parag;