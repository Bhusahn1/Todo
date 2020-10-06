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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerInputType = void 0;
const graphql_1 = require("@nestjs/graphql");
let CustomerInputType = class CustomerInputType {
};
__decorate([
    graphql_1.Field(),
    __metadata("design:type", Number)
], CustomerInputType.prototype, "id", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], CustomerInputType.prototype, "firstName", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], CustomerInputType.prototype, "lastName", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], CustomerInputType.prototype, "password", void 0);
CustomerInputType = __decorate([
    graphql_1.InputType()
], CustomerInputType);
exports.CustomerInputType = CustomerInputType;
//# sourceMappingURL=customer.input.js.map