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

export function repositoriesFound(repositories){
  return{
    type:types.LIST_REPOSITORIES,
    repositories
  }
}

export function userNotFound(error){
  return{
    type:types.NOT_FOUND,
    error
  }
}

export function userProfileFound(user){
  return{
    type:types.USER_PROFILE_FOUND,
    user
  }
}

export function stopLoading(){
  return{
    type:types.STOP_LOADING,
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
        else {
          dispatch(stopLoading())
        }
      })
  }
}

export function userDetails(userId){
  return dispatch => {
    dispatch(isLoading());
    return fetch(`${BASE_URL}/users/${userId}`)
      .then((response) => {
        if(response.status < 300){
          response.json().then((responseJSON) => {
            dispatch(userProfileFound(responseJSON))
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

export function searchUser(searchInput){
  return dispatch => {
    dispatch(isLoading());
    return fetch(`${BASE_URL}/search/users?q=${searchInput}`)
      .then((response) => {
        if(response.status < 300){
          response.json().then((responseJSON) => {
            dispatch(usersFound(responseJSON))
          })
        }
        else {
          dispatch(stopLoading())
        }
      })
  }
}

export function fetchRepositories(username){
  return dispatch => {
    dispatch(isLoading());
    return fetch(`${BASE_URL}/users/${username}/repos`)
      .then((response) => {
        if(response.status < 300){
          response.json().then((responseJSON) => {
            dispatch(repositoriesFound(responseJSON))
          })
        }
        else {
          dispatch(stopLoading())
        }
      })
  }
}

export function fetchUsersFollowersFollowings(username, fetchType){
  console.log(`${BASE_URL}/users/${username}/${fetchType}`);
  return dispatch => {
    dispatch(isLoading());
    return fetch(`${BASE_URL}/users/${username}/${fetchType}`)
      .then((response) => {
        if(response.status < 300){
          response.json().then((responseJSON) => {
            console.log(responseJSON);
            dispatch(usersFound(responseJSON))
          })
        }
        else {
          dispatch(stopLoading())
        }
      })
  }
}
