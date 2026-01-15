import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };
    // this.changeMessage=this.changeMessage.bind(this);
  }

  // changeMessage() {
  //   this.setState({message:"GoodBye"});
  //   console.log(this);
  // }

  changeMessage=()=>{
    console.log(this);
this.setState({message:"GoodBye"});
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        {/* <button onClick={this.changeMessage}>Click</button> */}
        {/* <button onClick={this.changeMessage.bind(this)}>Click</button> */}
        {/* <button onClick={()=>this.changeMessage()}>Click</button> */}
        {/* <button onClick={this.changeMessage}>Click</button> */}
        <button onClick={this.changeMessage}>Click</button>
      </div>
    );
  }
}

export default EventBind;

// Event Binding in Class Components is necessary because,this keyword has different values
//  in different contexts.There are four ways :-
// 1.Using bind() method in eventhandler.But using this method requires rendering the component every time
// which is ok for small application but not good for large applications.and also components with nested elements.
// 2.Using arrow function in event handler.It is similar to first method and most commonly used.
// 3.using bind() method in the constructor
// 4.Using arrow function method to create the event handler.
