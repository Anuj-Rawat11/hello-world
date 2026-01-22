import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {
constructor(props) {
  super(props)

  this.state = {
     parentName:"Parent"
  }
  this.greetParent=this.greetParent.bind(this);
}

greetParent(childName){
  alert(`Hello ${this.state.parentName} from ${childName}`);
}

  render() {
    return (
      <div>
        <ChildComponent greetHandler={this.greetParent}/>
      </div>
    )
  }
}

export default ParentComponent;


// We pass information from parent component to the child component by making use of props.If we need to pass information from child component
// to the parent component then also we make use of props.We need to pass a method as props from the parent component to the child component.
// Using that method in the child component we can pass information from child component to the parent component.