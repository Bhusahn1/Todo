import {
  Catch,
  HttpException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from './todo.entity';
import { TodoInputType } from './todo.input';
import { TodoObjectType } from './todo.object.type';
import { stat } from 'fs';
import { TodoRepository } from './todo.repository';
import { Customer } from 'src/customer/customer.entity';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(TodoRepository)
    private todoRepository: TodoRepository,
  ) {}

  async getTodo(id: number) {
    const customer = await this.todoRepository.findOne({ id });

    console.log('1..........', customer);

    return customer;
  }

  async addTask(todoInputType: TodoInputType) {
    const { task, status, customerId } = todoInputType;
    console.log('todoInputType............', todoInputType);
    const Todo = await this.todoRepository.create({
      task,
      status,
      customer: customerId,
    });
    return await this.todoRepository.save(Todo);
  }

  async updateTodo(id: number, todoInputType: TodoInputType) {
    const { task, status } = todoInputType;
    const todo = await this.todoRepository.findOne(id);
    if (todo) {
      todo.task = 'sat';
      todo.status = 'status';
      return await this.todoRepository.save(todo);
    } else {
      throw new NotFoundException(`Task with this id does not exist`);
    }
  }

  async deleteTodo(id) {
    const todo = await this.todoRepository.findOne(id);
    const data = { ...todo };
    if (todo) {
      await todo.remove();
      return data;
    } else {
      throw new NotFoundException(`Task with this id does not exist`);
    }
  }

  async updateTodoStatus(id: number, status: string) {
    const todo = await this.todoRepository.findOne(id);
    if (todo) {
      todo.status = status;
      return await this.todoRepository.save(todo);
    } else {
      throw new NotFoundException(`Task with this id does not exist`);
    }
  }
}
