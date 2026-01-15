import React, { Component } from 'react'

class ClassClick extends Component {
  clickHandler(){
      console.log("Button Clicked in Class Component")
    } 
    render() {
   
    return (
      <div>
        <button onClick={this.clickHandler}>Class-Click</button>
      </div>
    )
  }
}

export default ClassClick;
