import React, { useState } from 'react'
import Component2 from './Component2'
import {Component3} from './Component3'

const Component1 = () => {

    const [counter,setCounter ] = useState(0)

    const handleClick = () => {
        setCounter(counter+1)
    }
  return (
    <div>
        {counter}
        <button onClick={handleClick}>Click Here</button>
        <Component2/>
        <Component3/>
    </div>
  )
}

export default Component1