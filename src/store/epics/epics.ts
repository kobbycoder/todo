import { combineEpics } from 'redux-observable';
import todosEpic from './todosEpic';

const rootEpic = combineEpics(todosEpic);

export default rootEpic;
