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
exports.TodoResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const todo_input_1 = require("./todo.input");
const todo_object_type_1 = require("./todo.object.type");
const todo_service_1 = require("./todo.service");
let TodoResolver = class TodoResolver {
    constructor(todoService) {
        this.todoService = todoService;
    }
    getTodo() {
        return this.todoService.getTodo();
    }
    addTask(todoInputType) {
        return this.todoService.addTask(todoInputType);
    }
    updateTodo(id, todoInputType) {
        return this.todoService.updateTodo(id, todoInputType);
    }
    deleteTodo(id) {
        return this.todoService.deleteTodo(id);
    }
    updateTodoStatus(id, status) {
        return this.todoService.updateTodoStatus(id, status);
    }
};
__decorate([
    graphql_1.Query(returns => [todo_object_type_1.TodoObjectType]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TodoResolver.prototype, "getTodo", null);
__decorate([
    graphql_1.Mutation(returns => todo_object_type_1.TodoObjectType),
    __param(0, graphql_1.Args('todoInputType')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [todo_input_1.TodoInputType]),
    __metadata("design:returntype", void 0)
], TodoResolver.prototype, "addTask", null);
__decorate([
    graphql_1.Mutation(returns => todo_object_type_1.TodoObjectType),
    __param(0, graphql_1.Args('id')),
    __param(1, graphql_1.Args('todoInputType')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, todo_input_1.TodoInputType]),
    __metadata("design:returntype", void 0)
], TodoResolver.prototype, "updateTodo", null);
__decorate([
    graphql_1.Mutation(returns => todo_object_type_1.TodoObjectType),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TodoResolver.prototype, "deleteTodo", null);
__decorate([
    graphql_1.Mutation(returns => todo_object_type_1.TodoObjectType),
    __param(0, graphql_1.Args('id')), __param(1, graphql_1.Args('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", void 0)
], TodoResolver.prototype, "updateTodoStatus", null);
TodoResolver = __decorate([
    graphql_1.Resolver(of => todo_object_type_1.TodoObjectType),
    __metadata("design:paramtypes", [todo_service_1.TodoService])
], TodoResolver);
exports.TodoResolver = TodoResolver;
//# sourceMappingURL=todo.resolver.js.map