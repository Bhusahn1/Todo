import { Inject, UseGuards } from '@nestjs/common';
import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { InjectConnection, InjectEntityManager } from '@nestjs/typeorm';
import { AuthGuardToken } from 'src/customer/auth.guard';
import { Customer } from 'src/customer/customer.entity';
import { CustomerObjectType } from 'src/customer/customer.object.type';
import { CustomerRepository } from 'src/customer/customer.repository';
import { CustomerService } from 'src/customer/customer.service';
import { Todo } from './todo.entity';
import { TodoInputType } from './todo.input';
import { TodoObjectType } from './todo.object.type';
import { TodoService } from './todo.service';

@Resolver(of => TodoObjectType)
// @UseGuards(new AuthGuardToken())
export class TodoResolver {
  constructor(
    private todoService: TodoService,
    @Inject(CustomerService)
    private customerService: CustomerService,
  ) {}

  @Query(returns => [TodoObjectType])
  getTodo(@Args('id') id: number) {
    return this.todoService.getTodo(id);
  }

  @ResolveField(returns => CustomerObjectType)
  async getTodos(@Parent() todo: Todo) {
    const { customer } = todo;
    console.log('customer...........', todo);
    console.log('id...........', customer);

    return this.customerService.getCustomer(customer);
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
