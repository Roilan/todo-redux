import { SHOW_ALL, SET_VISIBLE_FILTER } from '../actions/index';

export default function(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBLE_FILTER:
      return action.filter;
    default:
      return state;
  }
}