import {combineReducers} from 'redux';
import fetchUsers from './users/fetchUsersReducer';

const rootReducer=combineReducers({
  fetchUsers
})

export default rootReducer;
