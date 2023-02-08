import React, { useEffect, useState } from 'react'

const Example1 = () => {

    const [result,setResult] = useState([]);

    const fetchDataFromAPI   = async ()  =>{
        await fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response)=>{
            return response.json();
        })
        .then((data) =>{
            setResult(data)                        
        })                   
    }
    
    


    useEffect(()=>{
        fetchDataFromAPI()
        
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

export default Example1