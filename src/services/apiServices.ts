// services/apiService.ts
import { injectable } from "tsyringe";
import axios, { AxiosResponse } from "axios";
import Todo from "../types/todo";

@injectable()
class ApiService {
  private apiUrl: string;
  
  constructor() {
    this.apiUrl = process.env.API_BASE_URL || '';
  }

  // Method to fetch todos
  async fetchTodos(): Promise<Todo[]> {
    try {
      const response: AxiosResponse<Todo[]> = await axios.get(this.apiUrl);
      return response.data;
    } catch (error) {
      console.error("Error fetching todos:", error);
      throw error;
    }
  }

  // Method to delete a todo
  async deleteTodo(todoId: number): Promise<void> {
    try {
      await axios.delete(`${this.apiUrl}/${todoId}`);
    } catch (error) {
      console.error("Error deleting the todo:", error);
      throw error;
    }
  }

  // Method to update a todo
  async updateTodo(updatedTodo: Todo): Promise<Todo> {
    try {
      const response: AxiosResponse<Todo> = await axios.put(
        `${this.apiUrl}/${updatedTodo.id}`,
        updatedTodo
      );
      return response.data;
    } catch (error) {
      console.error("Error updating the todo:", error);
      throw error;
    }
  }
}

export default ApiService;
