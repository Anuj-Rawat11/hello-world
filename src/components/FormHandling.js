import React, { Component } from "react";

class FormHandling extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comments:"",
      topic:"Angular"
    };
  }

  onUsernameChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  onCommentChange=event =>{
    this.setState({
      comments:event.target.value
    });
  };

  onTopicChange=(event)=>{
    this.setState({
      topic:event.target.value
    })
  };

  handleSubmit=event=>{
    alert(`Username : ${this.state.username}  Comments:${this.state.comments}  Topic:${this.state.topic}`);
    event.preventDefault();
  }
  render() {
    return (
      <form >
        <div>
          <label>Username :</label>
          <input
            type="text"
            value={this.state.username}
            onChange={this.onUsernameChange}
          />
        </div>
        <div>
          <label>Comments</label>
          <textarea value={this.state.comments} onChange={this.onCommentChange}></textarea>
        </div>
        <div>
          <label>Topic:</label>
          <select value={this.state.topic} onChange={this.onTopicChange}>
            <option>React</option>
            <option>Vue</option>
            <option>Angular</option>
          </select>
        </div>
        <button type="submit" onClick={this.handleSubmit}>Submit</button>
      </form>
    );
  }
}
// onSubmit={this.handleSubmit}
export default FormHandling;

// In React,we need to control the values of the form elements.That is,we need to make them controlled.We can do so controlling
// their value attribute and applying a state value to it.Whenever the user changes input value we will change the state value using setState
// method and thus re render the value.
