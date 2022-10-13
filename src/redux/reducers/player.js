import { ADD_USER, SET_QUESTIONS, SET_RANKING } from '../actions';

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
  case SET_QUESTIONS:
    return {
      ...state,
      arrQuestions: action.payload.arrQuestions,
    };
  default:
    return state;
  }
}

export default playerReduce;
