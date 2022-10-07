import { combineReducers } from 'redux';
import user from './user';
import questions from './questions';

const rootReduce = combineReducers({ user, questions });

export default rootReduce;
