import React, { useEffect, useMemo, useState } from "react";

function myFunction(value) {
  console.log("Counter 1 Value is: ", value);
}

const UseMemoExample = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  // const callThatFunction = myFunction(counter1)

  const callThatFunction = useMemo(() => myFunction(counter1), [counter1]);

  const handleClick1 = () => {
    setCounter1(counter1 + 1);
  };

  const handleClick2 = () => {
    setCounter2(counter2 + 1);
  };

  // useEffect(()=>{
  //     myFunction(counter1)
  // },[counter1])

  myFunction();

  return (
    <div>
      <div>
        {counter1}
        <button onClick={handleClick1}>Click Me</button>
      </div>
      <div>
        {counter2}
        <button onClick={handleClick2}>Click Me</button>
      </div>
      {/* {callThatFunction} */}
    </div>
  );
};

export default UseMemoExample;
