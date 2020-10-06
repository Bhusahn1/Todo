import { TodoInputType } from './todo.input';
import { TodoService } from './todo.service';
export declare class TodoResolver {
    private todoService;
    constructor(todoService: TodoService);
    getTodo(): Promise<import("./todo.entity").Todo[]>;
    addTask(todoInputType: TodoInputType): Promise<import("./todo.entity").Todo>;
    updateTodo(id: number, todoInputType: TodoInputType): Promise<import("./todo.entity").Todo>;
    deleteTodo(id: number): Promise<{
        id: number;
        task: string;
        status: string;
    }>;
    updateTodoStatus(id: number, status: string): Promise<import("./todo.entity").Todo>;
}
