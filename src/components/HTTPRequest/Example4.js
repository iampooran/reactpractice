import React, { useState } from "react";
import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

const Example4 = () => {
  const [result, setResult] = useState([]);

  React.useEffect(() => {
    axios.get(`${baseURL}/1`).then((response) => {
      setResult(response.data);
    });
  }, []);

  function createPost() {
    axios
      .post(baseURL, {
        title: "Hello World!",
        body: "This is a new post.",
      })
      .then((response) => {
        setResult(response.data);
        console.log(response.data);
      });
  }

  if (!result) return "No post!";

  return (
    <div>
      <h1>{result.title}</h1>
      <p>{result.body}</p>
      <button onClick={createPost}>Create Post</button>
    </div>
  );
};

export default Example4;
