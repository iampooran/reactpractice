import React from 'react'
import useFetch from './useFetch'

const APIHook = () => {

    const [data] = useFetch("https://jsonplaceholder.typicode.com/posts")
    console.log(data)
  return (
    
    <div>
        {data && data.map((element)=>{
            return <div key={element.id}>
                <p>{element.title}</p>
            </div>
        })} 
    
    </div>
  )
}

export default APIHook