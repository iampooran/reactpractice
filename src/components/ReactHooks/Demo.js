import React, { useState } from 'react'

const Demo = () => {
    const [name,setName] = useState("hello") 
    

    const handleClick = () =>{
        setName("hi")
    }
  return (
    <>
        {name}
        <button onClick={handleClick}>Click Here</button>
    </>
  )
}

export default Demo