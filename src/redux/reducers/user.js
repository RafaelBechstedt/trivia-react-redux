import { ADD_USER } from '../actions';

const INITIAL_STATE = {
  email: '',
  name: '',
};

function userReduce(state = INITIAL_STATE, action) {
  switch (action.type) {
  case ADD_USER:
    return {
      ...state,
      email: action.payload.email,
      name: action.payload.name,
    };
  default:
    return state;
  }
}

export default userReduce;
