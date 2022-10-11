export const GET_USER = 'GET_USER';
export const REQUEST_API = 'REQUEST_API';
export const ADD_USER = 'ADD_USER';
export const SET_RANKING = 'SET_RANKING';

export const requestApi = () => ({ type: REQUEST_API });

export const addUser = (payload) => ({
  type: ADD_USER,
  payload,
});

export const setRanking = (payload) => ({
  type: SET_RANKING,
  payload,
});
