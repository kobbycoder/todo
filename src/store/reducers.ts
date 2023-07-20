import todosSlice from './todosSlice';

const rootReducer = () => {
  return {
      allTodos: todosSlice,
  }
}


export default rootReducer;
