import React, { useState } from 'react'

const Child = ({chooseMessage}) => {
    const [parentMessage,setParentMessage] = useState('');

    const changeParentMessage = () =>{
        chooseMessage(parentMessage)
    }

  return (
    <div>
        <input value={parentMessage} onChange={(e)=> setParentMessage(e.target.value)}/>
        <button onClick={changeParentMessage}>Click Here!</button>
    </div>
  )
}

export default Child