import React, { Component } from "react";

class RefsDemo extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.cbRef = null;
    this.cbHandler = (element) => {
      this.cbRef = element;
    };
  }
  componentDidMount() {
    if (this.cbRef) {
      this.cbRef.focus();
    }

    // console.log(this.inputRef)
    // this.inputRef.current.focus()
  }

  clickHandler = () => {
    alert(this.cbRef.value);
    alert(this.inputRef.current.value);
  };
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <input type="text" ref={this.cbHandler} />
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default RefsDemo;

// Refs are a way to access element directly in React
// We can make use of refs to focus an input box when the page is loaded
// We can also use various operations on that input box like accessing its value
