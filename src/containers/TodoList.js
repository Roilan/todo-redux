import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddTodo from './AddTodo';
import { toggleTodo } from '../actions/index';

export default class TodoList extends Component {
  constructor() {
    super();
    this.renderTodoList = this.renderTodoList.bind(this);
  }

  renderTodoList() {
    const { todos, toggleTodo } = this.props;

    return todos.map(todo => {
      const completedTodo = todo.completed === true ? {textDecoration : 'line-through'} : {};

      return (
        <li style={completedTodo} key={todo.id} onClick={toggleTodo.bind(null, todo)}>{todo.name}</li>
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

export default connect(mapStateToProps, { toggleTodo })(TodoList);