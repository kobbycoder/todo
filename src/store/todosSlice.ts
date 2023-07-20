import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AllTodosInterface } from "../types/AllTodosInterface";

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
      state.result = action.payload;
    },
  },
});

export const { getTodosAction, getAllTodoSuccessAction, getAllTodoFailedAction } = todosSlice.actions;

export default todosSlice.reducer;
