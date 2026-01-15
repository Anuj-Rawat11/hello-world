import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment() {
    // this.state.count=this.state.count+1;
    // this.setState({ count: this.state.count + 1 },()=>{
    //   console.log(this.state.count);
    // });

    this.setState((prevState)=>({
      count:prevState.count+1
    }),()=>{
      console.log(this.state.count);
    });

    // console.log(this.state.count);
    //Asynchronous with call to setState,that is why prints previous value

  }
  incrementFive(){
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }

  render() {
    return (
      <div>
        <h1>Count - {this.state.count}</h1>
        <button onClick={() => this.incrementFive()}>Increment</button>
      </div>
    );
  }
}

export default Counter;


// https://youtu.be/j9xR6sR9W6Q?si=FbWmeyY7fjPDcQa0