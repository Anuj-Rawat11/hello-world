import React from 'react'

function MemoComp(props) {
  console.log("Child Component Render...")
  return (
    <div>
     <h1> Hello {props.name}</h1> 
    </div>
  )
}

export default React.memo(MemoComp)


// Memo is a higher order componenent in React used for functional components
// Memo is similar to pure components but it is used for functional components.
// It is re rendered only if there is any change in the state or props.