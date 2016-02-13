import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddTodo from './AddTodo';

export default class TodoList extends Component {
  constructor() {
    super();
    this.renderTodoList = this.renderTodoList.bind(this);
  }

  renderTodoList() {
    return this.props.todos.map((todo, key) => {
      return (
        <li key={key}>{todo.name}</li>
      )
    });
  }

  render() {
    return (
      <div>
        <h3>My Todo list</h3>

        <AddTodo />

        <ul>
          {this.renderTodoList()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps)(TodoList);