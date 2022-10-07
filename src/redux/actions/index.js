export const GET_USER = 'GET_USER';
export const REQUEST_API = 'REQUEST_API';
export const requestApi = () => ({ type: REQUEST_API });
export const ADD_USER = 'ADD_USER';
export const addUser = (payload) => ({
  type: ADD_USER,
  payload,
});
