import React from 'react'

function FunctionClick() {
  function clickHandler(){
    console.log("Button Clicked in Functional Component.");
  }
  return (
    <div>
      <h2>Event Handling</h2>
      <button onClick={clickHandler}>Function-Click</button>
    </div>
  )
}

export default FunctionClick;
