import { ADD_CHARACTERS } from '../actions/index';

const INITIAL_STATE = {
  allCharacters: [],
};

function characters(state = INITIAL_STATE, action) {
  switch (action.type) {
  case ADD_CHARACTERS:
    return {
      ...state,
      allCharacters: [...action.payload],
    };
  default:
    return state;
  }
}

export default characters;
