import { ADD_USER, SET_RANKING } from '../actions';

const INITIAL_STATE = {
  email: '',
  name: '',
  score: 0,
  assertions: 0,
};

function playerReduce(state = INITIAL_STATE, action) {
  switch (action.type) {
  case ADD_USER:
    return {
      ...state,
      email: action.payload.email,
      name: action.payload.name,
      score: action.payload.score,
      assertions: action.payload.assertions,
    };
  case SET_RANKING:
    return {
      ...state,
      score: action.payload.scoreRanking,
      assertions: action.payload.correctRanking,
    };
  default:
    return state;
  }
}

export default playerReduce;
