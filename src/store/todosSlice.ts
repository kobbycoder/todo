import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AllTodosInterface } from "../types/AllTodosInterface";
import { Todo } from "../types/Todo";

const initialState: AllTodosInterface = {
  todos: [],
  isLoading: false,
  isSuccessful: false,
  error: {}
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
      state.todos.unshift(action.payload); //I use unshift because I want the new item to move up the list
    },
  },
});

export const { getTodosAction, getAllTodoSuccessAction, getAllTodoFailedAction, addTodoAction } = todosSlice.actions;

export default todosSlice.reducer;
