import { ADD_USER, SET_RANKING } from '../actions';

const INITIAL_STATE = {
  email: '',
  name: '',
  score: 0,
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
    console.log(action.payload.score);
    return {
      ...state,
      score: action.payload,
    };
  default:
    return state;
  }
}

export default playerReduce;
