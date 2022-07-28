import { ADD_USER } from '../actions/index';

const INITIAL_STATE = {
  username: '',
}

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        username: action.payload,
      };
    default:
      return state;
  }
}

export default user;
