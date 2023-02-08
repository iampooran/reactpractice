import React, { useEffect, useState } from 'react'

const Example2 = () => {
    const [result,setResult] =useState([]) 

    const fetchDataFromAPI = async () =>{
        const url = "https://jsonplaceholder.typicode.com/posts"
        let data = await fetch(url);
        let parsedData = await data.json();
        setResult(parsedData);        
    }

    useEffect(()=>{
        fetchDataFromAPI();
        // console.log(result)
    },[])
  return (
    <div>
        {result.map((element)=>{
            return <div key={element.id}>
                <p>{element.title}</p>
            </div>
        })}
    
    </div>
  )
}

export default Example2