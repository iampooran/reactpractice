import React from "react";

const MyComponent = () => {
  console.log("Component 3 Rendered");
  return <div>Component3</div>;
};

export const Component3 = React.memo(MyComponent);
