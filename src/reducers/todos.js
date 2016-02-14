import { ADD_TODO, TOGGLE_TODO } from '../actions/index';

let todoId = 0;

export default function(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { name: action.payload, completed: false, id: todoId++ }]
    case TOGGLE_TODO:
      return state.map(todo => {
        if (todo.id !== action.payload.id) {
          return todo;
        }
        return Object.assign({}, todo, { completed: !todo.completed });
      });
    default:
      return state;
  }
}