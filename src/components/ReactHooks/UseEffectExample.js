import React, { useEffect, useState } from "react";

const UseEffectExample = () => {
  const [resourceType, setResourceType] = useState("posts");

  const fetchDataFromAPI = async () => {
    await fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
  };

  useEffect(() => {
    fetchDataFromAPI();
  });
  return (
    <>
      <button onClick={() => setResourceType("posts")}>Posts</button>
      <button onClick={() => setResourceType("users")}>User</button>
    </>
  );
};

export default UseEffectExample;
