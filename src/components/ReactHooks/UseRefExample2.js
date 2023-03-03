import { useRef } from "react";

const UseRefExample2 = () => {
  const myElement = useRef();

  const handleClick = () => {
    myElement.current.style.backgroundColor = "Red";
  };

  return (
    <div>
      <input ref={myElement} />
      <button onClick={handleClick}>Click to change color</button>
    </div>
  );
};

export default UseRefExample2;
