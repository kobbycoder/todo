import { Epic, ofType } from 'redux-observable';
import { map, switchMap, catchError } from 'rxjs/operators';
import { from, of } from 'rxjs';
import Dependencies from '../../types/Dependancies';
import Todo  from '../../types/Todo';
import { fetchTodos, fetchTodosSuccess, fetchTodosFailure } from '../actions';

const todosEpic: Epic = (action$, state$, { ApiService }: Dependencies) => {
  return action$.pipe(
    ofType(fetchTodos.type),
    switchMap(() =>
      from(ApiService.fetchTodos()).pipe(
        map((todos: Todo[]) => fetchTodosSuccess(todos)),
        catchError((error) => of(fetchTodosFailure(error.message)))
      )
    )
  );
};

export default todosEpic;
