import React, { useRef } from "react";

function UncontrolledComp() {
    const input =useRef(null);

    const handleSubmit=(e) => {
        e.preventDefault();
        console.log(input.current.value);
    }
    
    return (
        <div>
            <h3>Uncontrolled Components :</h3>
            <form>
                <label>Name :</label>
                <input type="text" placeholder="uncontrolled" ref={input} />
                <button onClick={handleSubmit} >Submit</button>
            </form>
        </div>
    );
}
export default UncontrolledComp;