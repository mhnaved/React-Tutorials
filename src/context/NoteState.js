import React from "react";
import { useState } from "react";
import NoteContext from "./noteContext";



const NoteState = (props)=> {
    const s1 = {
        "name": "Naved",
        "class": "B.E",
        "profession": "Software Engineer"
    }

    const [state, setState] = useState(s1);
    const  update = ()=> {
        setTimeout(() => {
            setState({
                "name": "Jamshed",
                "class": "Diploma",
                "profession": "Full Stack Developer"
            })
            
        }, 2000);
    }
    return (
        <div>

        <NoteContext.Provider value={{state,update}}>
            {props.children}
        </NoteContext.Provider>

        </div>

    )

}


export default NoteState;


