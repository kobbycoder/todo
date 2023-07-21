import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AllTodosInterface } from "../types/AllTodosInterface";
import { Todo } from "../types/Todo";

const initialState: AllTodosInterface = {
  todos: [],
  isLoading: false,
  isSuccessful: false,
  error: {},
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    getTodosAction: (state: any) => {
      state.isLoading = true;
    },
    getAllTodoSuccessAction: (state: any, action: PayloadAction<[]>) => {
      state.todos = action.payload;
      state.isLoading = false;
      state.isSuccessful = true;
    },
    getAllTodoFailedAction: (state: any, action: PayloadAction<{}>) => {
      state.isSuccessful = false;
      state.error = action.payload;
    },
    addTodoAction: (state: AllTodosInterface, action: PayloadAction<Todo>) => {
      state.todos.unshift(action.payload);
    },
    updateTodoAction: (
      state: AllTodosInterface,
      action: PayloadAction<Todo>
    ) => {
      const updatedIndex = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      if (updatedIndex !== -1) {
        state.todos[updatedIndex] = action.payload;
      }
    },
    deleteTodoAction: (state: AllTodosInterface, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const {
  getTodosAction,
  getAllTodoSuccessAction,
  getAllTodoFailedAction,
  addTodoAction,
  updateTodoAction,
  deleteTodoAction
} = todosSlice.actions;

export default todosSlice.reducer;
