import React,{Component} from 'react';

class Hello extends Component{
    render(){
        // return <h1>Hello Everyone,I am a class component</h1>
        // console.log(this.props);
        // this.props.name="Anuj";
        // this.props.age=20;
        return (
            <div>
        <h1>Hello {this.props.name}</h1>
        <p>{this.props.children}</p>
</div>
        )
    }
}

export default Hello;