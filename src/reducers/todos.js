import { ADD_TODO } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { name: action.payload, status: 'incomplete' }]
    default:
      return state;
  }
}