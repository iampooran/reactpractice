import React, { useEffect, useState } from "react";
import axios from "axios";

const Example3 = () => {
  const [result, setResult] = useState([]);

  const fetchDataFromAPI = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      setResult(response.data);
    });
  };

  useEffect(() => {
    fetchDataFromAPI();
  }, []);

  return (
    <div>
      {result.map((element) => {
        return (
          <div key={element.id}>
            <p>{element.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Example3;
