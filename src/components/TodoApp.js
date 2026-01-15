import React, { Component } from "react";

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      newTodoText: ""
    };
  }

  handleInputChange = (e) => {
    this.setState({ newTodoText: e.target.value });
  };

  addTodo = () => {
    const { todos, newTodoText } = this.state;
    if (!newTodoText.trim()) return;
    this.setState({
      todos: [...todos, { id: Date.now(), text: newTodoText }],
      newTodoText: ""
    });
  };

  deleteTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id)
    });
  };

  render() {
    return (
      <div>
        <h1>To-Do List</h1>

        <input
          type="text"
          value={this.state.newTodoText}
          onChange={this.handleInputChange}
          placeholder="Add a new task"
        />
        <button onClick={this.addTodo}>Add</button>

        <ul>
          {this.state.todos.map((todo) => (
            <li key={todo.id}>
              {todo.text}
              <button onClick={() => this.deleteTodo(todo.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoApp;
