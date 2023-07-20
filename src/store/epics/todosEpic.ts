import { ofType } from "redux-observable";
import { catchError, from, map, mergeMap, of } from "rxjs";
import {
  getTodosAction,
  getAllTodoSuccessAction,
  getAllTodoFailedAction,
} from "../todosSlice";
import { container } from "tsyringe";
import ApiService from "../../services/apiServices";

export const todosEpic = (action$: any, state$: any) => {
  const api = container.resolve(ApiService);

  return action$.pipe(
    ofType(getTodosAction),
    mergeMap((action: any) =>
      from(api.fetchTodos()).pipe(
        map((response: any) => {
          if (response) {
            return getAllTodoSuccessAction(response);
          } else {
            throw response;
          }
        }),
        catchError((err) => {
          let result = {
            message: err,
          };
          return of(getAllTodoFailedAction(result));
        })
      )
    )
  );
};
