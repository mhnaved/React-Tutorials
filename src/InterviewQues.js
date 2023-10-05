import React from 'react'
import  {useState} from 'react'

const InterviewQues = ()=>{
    const [counter, setCounter] = useState(0)

    const handleclick1 = ()=> {
        setCounter(counter + 1)
    }
    const handleclick2 = ()=> {
        setCounter((prevCount) => (Math.max(prevCount -1 ,1)));
    }

    return(
        <div>
            {counter}
            <br /> <br />
            <button type='submit' onClick={handleclick1}>Increment</button>
            <button type='submit' onClick={handleclick2}>Decrement</button>
        </div>
    )
}



export default InterviewQues