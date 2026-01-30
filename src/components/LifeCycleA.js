import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";

class LifeCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Anuj",
    };
    console.log("Component A Constructor Executed...");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Component A getDerivedStateByProps Executed");
    return null;
  }

  componentDidMount() {
    console.log("Component A componentDidMount Executed");
  }

  getSnapshotBeforeUpdate(prevProps,prevState){
console.log("Component A getSnapshotBeforeUpdate");
return null;

  }
  shouldComponentUpdate(){
    console.log("Component A shouldComponentUpdate");
    return true;
  }
  componentDidUpdate(){
    console.log("Component A componentDidUpdate")
  }

  ChangeState=()=>{
    this.setState({
      name:"Gagan"
    })
  }
  render() {
    console.log("Component A render executed");

    return (
      <div>
        <div>Component A LifeCycle</div>
        <button onClick={this.ChangeState}>Change State</button>
        <LifeCycleB />
      </div>
    );
  }
}

export default LifeCycleA;



// Updating Lifecycle Methods
// getStateFromProps
// shouldComponentUpdate
//render
// getSnapShotBeforeUpdate
// componentDidUpdate
