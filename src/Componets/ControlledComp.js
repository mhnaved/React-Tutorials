
import React, { useState} from "react";

const ControlledComp = () => {
    const[inputText, setInputText] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(inputText);
    };
    return (
        <div>
            
        <h3>Controlled Components :</h3>
        <form>
        <input type="text" placeholder="controlled" value={inputText} 
        onChange= {(e) => setInputText(e.target.value)} />
        <button onClick={handleSubmit}>Submit</button>
        <p>{inputText} </p>
        
        </form>

        </div>

    ); 
};
export default ControlledComp;
