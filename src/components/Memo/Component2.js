import React from 'react'

const Component2 = React.memo(() => {
    console.log("Component 2 Rendered")
  return (
    <div>Component2</div>
  )
})

export default Component2