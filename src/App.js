import { useState } from "react";
import MyComponent from "./MyComponent";
import Main from "./components/Memo/Main";

function App() {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      {counter}
      <button onClick={handleClick}>Click Me</button>
      {/* <Main/> */}
      <MyComponent />
    </>
  );
}

export default App;
