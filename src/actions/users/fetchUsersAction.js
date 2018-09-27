import * as types from '../types';
import {BASE_URL} from '../../constants/url';

export function isLoading(){
  return{
    type:types.IS_LOADING
  }
}

export function usersFound(users){
  return{
    type:types.LIST_USERS,
    users
  }
}

export function userNotFound(error){
  return{
    type:types.NOT_FOUND,
    error
  }
}

export function fetchUsers(){
  return dispatch => {
    dispatch(isLoading());
    return fetch(`${BASE_URL}/users`)
      .then((response) => {
        if(response.status < 300){
          response.json().then((responseJSON) => {
            dispatch(usersFound(responseJSON))
          })
        }
      })
  }
}

export function userDetails(userId){
  console.log(`${BASE_URL}/users/${userId}`);
  return dispatch => {
    dispatch(isLoading());
    return fetch(`${BASE_URL}/users/${userId}`)
      .then((response) => {
        if(response.status < 300){
          response.json().then((responseJSON) => {
            dispatch(usersFound(responseJSON))
          })
        }
        else{
          response.json().then((responseJSON) => {
            dispatch(userNotFound(responseJSON.message))
          })
        }
      })
  }
}
