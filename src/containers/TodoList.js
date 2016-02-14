import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddTodo from './AddTodo';
import { toggleTodo, setVisibleFilter, SHOW_COMPLETED, SHOW_INCOMPLETE } from '../actions/index';

class TodoList extends Component {
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
        <button onClick={this.props.setVisibleFilter.bind(null, SHOW_COMPLETED)}>Completed</button>
        <button onClick={this.props.setVisibleFilter.bind(null, SHOW_INCOMPLETE)}>Incomplete</button>
        <button onClick={this.props.setVisibleFilter}>Show All</button>
        <ul>
          {this.renderTodoList()}
        </ul>
      </div>
    )
  }
}

function setVisibleTodos (todos, filter) {
  switch(filter) {
    case SHOW_COMPLETED:
      return todos.filter(todo => todo.completed);
    case SHOW_INCOMPLETE:
      return todos.filter(todo => !todo.completed);
    default:
      return todos;
  }
}

function mapStateToProps(state) {
  return {
    todos: setVisibleTodos(state.todos, state.visibleTodos)
  }
}

export default connect(mapStateToProps, { toggleTodo, setVisibleFilter })(TodoList);