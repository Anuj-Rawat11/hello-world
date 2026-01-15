import React from 'react'

function FunctionClick() {
  function clickHandler(){
    console.log("Button Clicked in Functional Component.");
  }
  return (
    <div>
      <button onClick={clickHandler}>Function-Click</button>
    </div>
  )
}

export default FunctionClick;
