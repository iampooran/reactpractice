import React, { useCallback, useEffect, useState } from "react";

const UseCallbackExample = () => {
  const [counter, setCounter] = useState(0);

  const myFunction = useCallback(()=>{
    setCounter(counter+1)
    console.log("I am clicked")
  },[counter])
  
  useEffect(()=>{
    console.log("Use Effect")
  },[myFunction])

  return (
    <div>
      <p>{counter}</p>
      <button onClick={myFunction}>Click Me</button>
    </div>
  );
};

export default UseCallbackExample;
