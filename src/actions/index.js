export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export const SHOW_ALL = 'SHOW_ALL';
export const SHOW_COMPLETED = 'SHOW_COMPLETED';
export const SHOW_INCOMPLETE = 'SHOW_INCOMPLETE';
export const SET_VISIBLE_FILTER = 'SET_VISIBLE_FILTER';

export function addTodo(todo) {
  return {
    type: ADD_TODO,
    payload: todo
  }
}

export function toggleTodo(todo) {
  return {
    type: TOGGLE_TODO,
    payload: todo
  }
}

export function setVisibleFilter(filter) {
  return {
    type: SET_VISIBLE_FILTER,
    filter
  }
}

