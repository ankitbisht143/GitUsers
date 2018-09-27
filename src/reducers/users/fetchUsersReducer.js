import * as types from '../../actions/types';

const INITIAL_STATE = {
  users:{},
  isLoading:false,
  error:undefined,
  user:{}
}

export default function fetchUsers(state=INITIAL_STATE,action){
  switch (action.type) {
    case types.IS_LOADING:
      return{
        ...state,
        isLoading:true
      }
      break;
    case types.LIST_USERS:
      return{
        ...state,
        isLoading:false,
        users:action.users,
        error:undefined
      }
      break;
    case types.NOT_FOUND:
      return{
        ...state,
        isLoading:false,
        users:action.users,
        error:action.error
      }
      break;
    case types.USER_PROFILE_FOUND:
      return{
        ...state,
        isLoading:false,
        user:action.user
      }
      break;
    default:
      return state
  }
}
