// A class component can also maintain a private internal state.
// In simpler words,it can maintain some information which is private to that component and use that information
// to describe the user interface.
// Whenever we have to create a class component,we need to include two imports 
// These are React and Component class.

import React,{Component} from 'react';
class Welcome extends Component{

    render(){
const {name,age}=this.props;
return (
    <div>
        <h1>Welcome {name}</h1>
        <h1>You are {age} years old</h1>
    </div>
)
        // return <h1>Welcome,This is a class component</h1>;

    }
}

export default Welcome;