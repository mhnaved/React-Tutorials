import React from 'react'
import { useContext } from 'react'
import noteContext from './noteContext'
 function Para() {
    const c = useContext(noteContext);
  return (
    <div>
      <h1>Hello,{c.state.name}</h1>
      <h2>Have you completed {c.state.class}</h2>
      <h3>My profession is {c.state.profession}</h3>
    </div>
  )
}
export default Para



