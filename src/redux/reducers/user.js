import { ADD_USER } from '../actions/index';

const INITIAL_STATE = {
  username: '',
  redirect: false,
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case ADD_USER:
    return {
      ...state,
      username: action.payload,
      redirect: true,
    };
  default:
    return state;
  }
}

export default user;
