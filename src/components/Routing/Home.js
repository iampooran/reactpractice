import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [id, setId] = useState(0);

  const hanldeOnChange = (event) => {
    setId(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div>
      <input value={id} onChange={hanldeOnChange} />
      <Link to="/page1">Page1</Link>
      <Link to="/page2">Page2</Link>
      <Link to={`/page3/${id}`}>Page3</Link>
    </div>
  );
};

export default Home;
