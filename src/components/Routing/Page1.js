import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Page1 = () => {

    const navigate  = useNavigate()

    const handleClick = () =>{
            navigate("/page2")
    }

  return (
    <div>
        <h1> This is page 1</h1>
        <Link to="/">Go to home</Link>
        <button onClick={handleClick}>Go To Page 2</button>
    </div>
  )
}

export default Page1