"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const todo_repository_1 = require("./todo.repository");
let TodoService = class TodoService {
    constructor(todoRepository) {
        this.todoRepository = todoRepository;
    }
    async addTask(todoInputType) {
        const { task, status } = todoInputType;
        const Todo = await this.todoRepository.create({
            task,
            status,
        });
        return await this.todoRepository.save(Todo);
    }
    async getTodo() {
        return await this.todoRepository.find();
    }
    async updateTodo(id, todoInputType) {
        const { task, status } = todoInputType;
        const todo = await this.todoRepository.findOne(id);
        console.log('todo........', todo);
        if (todo) {
            todo.task = 'sat';
            todo.status = 'status';
            return await this.todoRepository.save(todo);
        }
        else {
            throw new common_1.NotFoundException(`Id ${id} with this task does not found`);
        }
    }
    async deleteTodo(id) {
        const todo = await this.todoRepository.findOne(id);
        const data = Object.assign({}, todo);
        console.log('))..', todo);
        if (todo) {
            await todo.remove();
            return data;
        }
        else {
            throw new common_1.NotFoundException(`Id ${id} with this task does not found`);
        }
    }
    async updateTodoStatus(id, status) {
        const todo = await this.todoRepository.findOne(id);
        if (todo) {
            todo.status = status;
            return await this.todoRepository.save(todo);
        }
        else {
            throw new common_1.NotFoundException(`Id ${id} with this task does not found`);
        }
    }
};
TodoService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(todo_repository_1.TodoRepository)),
    __metadata("design:paramtypes", [todo_repository_1.TodoRepository])
], TodoService);
exports.TodoService = TodoService;
//# sourceMappingURL=todo.service.js.map