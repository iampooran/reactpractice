import React, { useState } from 'react'

const UseStateExample = () => {
    const [number,setNumber] = useState(0)
  return (
    <div>
        {number}
        <button onClick={()=> setNumber(number+1)}>Add</button>
        <button onClick={()=> setNumber(number-1)}>Less</button>
    </div>
  )
}

export default UseStateExample