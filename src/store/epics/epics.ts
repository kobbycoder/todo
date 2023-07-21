import { combineEpics } from 'redux-observable';
import { todosEpic } from './todosEpic';

export const rootEpic = combineEpics(
    todosEpic
);
