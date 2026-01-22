import React, { Component } from "react";

class ConditionalRender extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //  isLoggedIn:false
      isLoggedIn: true,
    };
  }

  render() {
    return (
      this.state.isLoggedIn && (
        <div>
          <h1>Welcome Vishwas</h1>
        </div>
      )
    );

    // return this.state.isLoggedIn ? (
    //   <div>
    //     <h1>Welcome Vishwas</h1>
    //   </div>
    // ) : (
    //   <div>
    //     <h1>Welcome Guest</h1>
    //   </div>
    // );

    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <h1>Welcome Vishwas</h1>;
    // } else {
    //   message = <h1>Welcome Guest</h1>;
    // }

    // return <div>{message}</div>;
    // if(this.state.isLoggedIn){
    //   return (
    //     <div>
    //       <h1>Welcome Vishwas</h1>
    //     </div>
    //   )
    // }else{
    //   return (
    //     <div>
    //       <h1>Welcome Guest</h1>
    //     </div>
    //   )
    // }

    // return (
    //   <div>
    //     <h1>Welcome Vishwas</h1>
    //     <h1>Welcome Guest</h1>
    //   </div>
    // )
  }
}

export default ConditionalRender;

// Conditional Rendering inn React means rendering the contents on the page based on conditions.
// There are four ways for performing conditional rendering :
// 1.Making use of if/else
// 2.Making use of element variables
// 3.use of ternary operator (?:)
// 4.Using short circuit operator(&&)
