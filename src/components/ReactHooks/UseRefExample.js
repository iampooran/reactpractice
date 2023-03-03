import { useEffect, useRef, useState } from "react";

const UseRefExample = () => {
  const [number, setNumber] = useState(1);
  const previosNum = useRef();

  useEffect(() => {
    previosNum.current = number;
  });

  return (
    <>
      Now: {number}, before: {previosNum.current}
      <button onClick={() => setNumber((number) => number + 1)}>
        Increment
      </button>
    </>
  );
};

export default UseRefExample;
