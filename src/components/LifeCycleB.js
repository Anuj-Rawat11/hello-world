import React, { Component } from "react";

class LifeCycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Anuj",
    };
    console.log("Component B Constructor Executed...");
  }

  static getDerivedStateFromProps(props,state){
    console.log("Component B getDerivedStateByProps Executed");
    return null;

  }

  componentDidMount(){
    console.log("Component B componentDidMount Executed");
  }

  
  getSnapshotBeforeUpdate(prevProps,prevState){
console.log("Component B getSnapshotBeforeUpdate");
return null;
  }
  shouldComponentUpdate(){
    console.log("Component B shouldComponentUpdate");
    return true;
  }
  componentDidUpdate(){
    console.log("Component B componentDidUpdate")
  }

  render() {
    console.log("Component B render executed");
    return <div>Component B LifeCycle</div>;
    
  }
}

export default LifeCycleB;
