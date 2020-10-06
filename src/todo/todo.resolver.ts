import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TodoInputType } from './todo.input';
import { TodoObjectType } from './todo.object.type';
import { TodoService } from './todo.service';

@Resolver(of => TodoObjectType)
export class TodoResolver {
  constructor(private todoService: TodoService) {}

  @Query(returns => [TodoObjectType])
  getTodo() {
    return this.todoService.getTodo();
  }

  @Mutation(returns => TodoObjectType)
  addTask(@Args('todoInputType') todoInputType: TodoInputType) {
    return this.todoService.addTask(todoInputType);
  }

  @Mutation(returns => TodoObjectType)
  updateTodo(
    @Args('id') id: number,
    @Args('todoInputType') todoInputType: TodoInputType,
  ) {
    return this.todoService.updateTodo(id, todoInputType);
  }

  @Mutation(returns => TodoObjectType)
  deleteTodo(@Args('id') id: number) {
    return this.todoService.deleteTodo(id);
  }

  @Mutation(returns => TodoObjectType)
  updateTodoStatus(@Args('id') id: number, @Args('status') status: string) {
    return this.todoService.updateTodoStatus(id, status);
  }
}
