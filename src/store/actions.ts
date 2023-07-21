import { createAction } from '@reduxjs/toolkit';
import {Todo} from '../types/Todo';

export const fetchTodos = createAction('todos/fetchTodos');
export const fetchTodosSuccess = createAction<Todo[]>('todos/fetchTodosSuccess');
export const fetchTodosFailure = createAction<string>('todos/fetchTodosFailure');

export const updateTodo = createAction<Todo>('todos/updateTodo');
export const updateTodoSuccess = createAction<Todo>('todos/updateTodoSuccess');
export const updateTodoFailure = createAction<string>('todos/updateTodoFailure');

export const deleteTodo = createAction<number>('todos/deleteTodo');
export const deleteTodoSuccess = createAction<number>('todos/deleteTodoSuccess');
export const deleteTodoFailure = createAction<string>('todos/deleteTodoFailure');
