import React, { Component } from 'react'

class ClassClick extends Component {
  clickHandler(){
      console.log("Button Clicked in Class Component")
    } 
    render() {
   
    return (
      <div>
        <h2>Event Handling in Class Component</h2>
        <button onClick={this.clickHandler}>Class-Click</button>
      </div>
    )
  }
}

export default ClassClick;
