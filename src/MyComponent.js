import { logRoles } from "@testing-library/react";
import React from "react";

const MyComponent = React.memo(() => {
  const [count, setCount] = React.useState(0);

  const handelClick = () => {
    setCount(count + 1);
  };

  console.log("myComponent");

  return (
    <div>
      {count}

      <button onClick={handelClick}>MyComponent</button>
    </div>
  );
});

export default MyComponent;
