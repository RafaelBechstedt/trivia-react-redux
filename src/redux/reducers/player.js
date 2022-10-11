import { ADD_USER, SET_RANKING } from '../actions';

const INITIAL_STATE = {
  email: '',
  name: '',
  score: 0,
  correct: 0,
};

function playerReduce(state = INITIAL_STATE, action) {
  switch (action.type) {
  case ADD_USER:
    return {
      ...state,
      email: action.payload.email,
      name: action.payload.name,
    };
  case SET_RANKING:
    return {
      ...state,
      score: action.payload.scoreRanking,
      correct: action.payload.correctRanking,
    };
  default:
    return state;
  }
}

export default playerReduce;
