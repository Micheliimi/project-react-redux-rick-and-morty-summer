import { combineReducers } from 'redux';
import user from './user';
import characters from './characters'

const rootReducer = combineReducers({user, characters});

export default rootReducer;