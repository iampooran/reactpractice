import React, { useState } from 'react'
import Child from './Child';

const Parent = () => {
    const [message,setMessage] = useState("No Message Here")

    const chooseMessage = ( message ) =>{
        setMessage(message)
    };

    return (
    <div>
        <h1>{message}</h1>
        <Child chooseMessage={chooseMessage}/>
    </div>
  )
}

export default Parent