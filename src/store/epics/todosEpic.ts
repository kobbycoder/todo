import { ofType } from "redux-observable";
import { catchError, from, map, mergeMap, of } from "rxjs";
import {
  getTodosAction,
  getAllTodoSuccessAction,
  getAllTodoFailedAction,
  updateTodoAction,
  updateTodoSuccessAction,
  updateTodoFailedAction,
  deleteTodoAction,
  deleteTodoSuccessAction,
  deleteTodoFailedAction,
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
    ),
    // Handle updateTodoAction
    // ofType(updateTodoAction),
    // mergeMap((action: any) =>
    //   from(api.updateTodo(action.payload)).pipe(
    //     map((response: any) => {
    //       if (response) {
    //         return updateTodoSuccessAction(response);
    //       } else {
    //         throw response;
    //       }
    //     }),
    //     catchError((err) => {
    //       let result = {
    //         message: err,
    //       };
    //       return of(updateTodoFailedAction(result));
    //     })
    //   )
    // ),
    // // Handle deleteTodoAction
    // ofType(deleteTodoAction),
    // mergeMap((action: any) =>
    //   from(api.deleteTodo(action.payload)).pipe(
    //     map(() => {
    //       return deleteTodoSuccessAction(action.payload);
    //     }),
    //     catchError((err) => {
    //       let result = {
    //         message: err,
    //       };
    //       return of(deleteTodoFailedAction(result));
    //     })
    //   )
    // )
  );
};
