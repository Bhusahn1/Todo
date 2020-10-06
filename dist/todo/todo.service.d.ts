import { Todo } from './todo.entity';
import { TodoInputType } from './todo.input';
import { TodoRepository } from './todo.repository';
export declare class TodoService {
    private todoRepository;
    constructor(todoRepository: TodoRepository);
    addTask(todoInputType: TodoInputType): Promise<Todo>;
    getTodo(): Promise<Todo[]>;
    updateTodo(id: number, todoInputType: TodoInputType): Promise<Todo>;
    deleteTodo(id: any): Promise<{
        id: number;
        task: string;
        status: string;
    }>;
    updateTodoStatus(id: number, status: string): Promise<Todo>;
}
