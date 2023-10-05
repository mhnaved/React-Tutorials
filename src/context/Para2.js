import React from 'react'
// import './App.css';
import noteContext from './noteContext'
import { useContext } from 'react'
function Para2() {
    const e = useContext(noteContext);
  return (
    <div>

        <h4 className='header'>Hey,I am {e.state.name},What can i help you!</h4>
      
    </div>
  )
}

export default Para2;
