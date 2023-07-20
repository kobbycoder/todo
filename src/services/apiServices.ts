import { injectable } from 'tsyringe';
import axios, { AxiosResponse } from 'axios';
import { Todo } from '../types/Todo';

@injectable()
class ApiService {
  private apiUrl: string;

  constructor() {
    this.apiUrl = 'https://my-json-server.typicode.com/kobbycoder/todo/todos';
  }

  async fetchTodos(): Promise<Todo[]> {
    try {
      const response: AxiosResponse<Todo[]> = await axios.get(this.apiUrl);
      return response.data;
    } catch (error) {
      console.error('Error fetching todos:', error);
      throw error;
    }
  }

  async deleteTodo(todoId: number): Promise<void> {
    try {
      await axios.delete(`${this.apiUrl}/${todoId}`);
    } catch (error) {
      console.error('Error deleting the todo:', error);
      throw error;
    }
  }

  async updateTodo(updatedTodo: Todo): Promise<Todo> {
    try {
      const response: AxiosResponse<Todo> = await axios.put(
        `${this.apiUrl}/${updatedTodo.id}`,
        updatedTodo
      );
      return response.data;
    } catch (error) {
      console.error('Error updating the todo:', error);
      throw error;
    }
  }
}

export default ApiService;
