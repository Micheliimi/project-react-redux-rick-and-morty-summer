import fetchAPI from '../../services/data';

export const ADD_USER = 'ADD_USER';
export const ADD_CHARACTERS = 'ADD_CHARACTERS';

export const addUser = (payload) => ({
  type: ADD_USER,
  payload,
});

const addCharacters = (payload) => ({
  type: ADD_CHARACTERS,
  payload,
});

export const fetchCharacters = () => async (dispatch) => {
  const result = await fetchAPI();
  dispatch(addCharacters(result));
};
