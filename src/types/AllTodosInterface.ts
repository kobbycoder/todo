import { Todo } from "./Todo";
import { StateInterface } from "./StateInterface";

export interface AllTodosInterface extends StateInterface {
    todos: Array<Todo>
}