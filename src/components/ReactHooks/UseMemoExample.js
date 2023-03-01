import React, { useMemo, useState } from 'react'



const UseMemoExample = () => {

    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)

    const customFunction = useMemo(()=>myFunction(count),[count])
    
    const handleClick = () =>{
        setCount(count+1)
    }

    const handleClick2 = () =>{
        setCount2(count2+1)
    }

  return (
    <div>
        <div>
        Counter 1 Value:
        {count}
        <button onClick={handleClick}>Click Here</button>
        {customFunction}
        </div>
        <div>
        Counter 2 Value:
        {count2}
        <button onClick={handleClick2}>Click Here</button>
        {customFunction}
        </div>
    </div>
  )
}

export default UseMemoExample

function myFunction(value){
    console.log("Count Value: ", value)
}