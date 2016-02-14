import { combineReducers } from 'redux';
import TodosReducer from './Todos';
import VisibleTodosReducer from './VisibleTodos';

const rootReducer = combineReducers({
  todos: TodosReducer,
  visibleTodos: VisibleTodosReducer
});

export default rootReducer;
