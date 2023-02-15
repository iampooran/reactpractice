import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Page3 = () => {
    const {id} = useParams()
  return (
    <div>
        {id}
        <h1> This is page 3</h1>
        <Link to="/">Go to home</Link>
    </div>
  )
}

export default Page3