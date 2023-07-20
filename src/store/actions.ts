import { createAction } from '@reduxjs/toolkit';
import Todo from '../types/Todo';

export const fetchTodos = createAction('todos/fetchTodos');
export const fetchTodosSuccess = createAction<Todo[]>('todos/fetchTodosSuccess');
export const fetchTodosFailure = createAction<string>('todos/fetchTodosFailure');
