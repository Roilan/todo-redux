import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/index';

class AddTodo extends Component {
  constructor() {
    super();

    this.submitTodo = this.submitTodo.bind(this);
  }

  submitTodo(e) {
    e.preventDefault();
    const { todoInput } = this.refs;

    if (todoInput.value === '') return;

    this.props.addTodo(todoInput.value);
    todoInput.value = '';
  }

  render() {
    return (
      <form onSubmit={this.submitTodo}>
        <input type="text" ref="todoInput" />
        <button type="submit">Add Todo</button>
      </form>
    )
  }
}

export default connect(null, { addTodo })(AddTodo);