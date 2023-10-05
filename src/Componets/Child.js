import React, { memo } from 'react'

const  Child = ({countertwo, setcountertwo})=> {
    console.log("Child Component Rerendered!!")
  return (
    <div>
        <h1>Child Component</h1>

    </div>
  )
}

export default memo( Child);