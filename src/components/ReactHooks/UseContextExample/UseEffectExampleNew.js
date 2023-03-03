import React, { useEffect, useState } from "react";

const UseEffectExampleNew = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log(count);
  });
  return (
    <div>
      {count}
      <button onClick={handleClick}>Click Here</button>
    </div>
  );
};

export default UseEffectExampleNew;
