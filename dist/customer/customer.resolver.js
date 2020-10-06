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
exports.CustomerResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const customer_input_1 = require("./customer.input");
const customer_object_type_1 = require("./customer.object.type");
const customer_service_1 = require("./customer.service");
const otp_input_1 = require("./otp.input");
let CustomerResolver = class CustomerResolver {
    constructor(customerService) {
        this.customerService = customerService;
    }
    getCustomer() {
        return this.customerService.getCustomer();
    }
    signUp(customerInputType) {
        return this.customerService.signUp(customerInputType);
    }
    login(firstName, password) {
        return this.customerService.login(firstName, password);
    }
    updateProfile(customerInputType) {
        return this.customerService.updateProfile(customerInputType);
    }
    deleteProfile(id) {
        return this.customerService.deleteProfile(id);
    }
    updatePassword(id, password) {
        return this.customerService.updatePassword(id, password);
    }
    generateOtp(firstName) {
        return this.customerService.generateOtp(firstName);
    }
    forgetPassword(firstName, otp, password) {
        return this.customerService.forgetPassword(firstName, otp, password);
    }
};
__decorate([
    graphql_1.Query(returns => [customer_object_type_1.CustomerObjectType]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CustomerResolver.prototype, "getCustomer", null);
__decorate([
    graphql_1.Mutation(returns => customer_object_type_1.CustomerObjectType),
    __param(0, graphql_1.Args('customerInputType')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [customer_input_1.CustomerInputType]),
    __metadata("design:returntype", void 0)
], CustomerResolver.prototype, "signUp", null);
__decorate([
    graphql_1.Mutation(returns => customer_object_type_1.CustomerObjectType),
    __param(0, graphql_1.Args('firstName')),
    __param(1, graphql_1.Args('password')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], CustomerResolver.prototype, "login", null);
__decorate([
    graphql_1.Mutation(returns => customer_object_type_1.CustomerObjectType),
    __param(0, graphql_1.Args('customerInputType')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [customer_input_1.CustomerInputType]),
    __metadata("design:returntype", void 0)
], CustomerResolver.prototype, "updateProfile", null);
__decorate([
    graphql_1.Mutation(returns => customer_object_type_1.CustomerObjectType),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CustomerResolver.prototype, "deleteProfile", null);
__decorate([
    graphql_1.Mutation(returns => customer_object_type_1.CustomerObjectType),
    __param(0, graphql_1.Args('id')), __param(1, graphql_1.Args('password')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", void 0)
], CustomerResolver.prototype, "updatePassword", null);
__decorate([
    graphql_1.Mutation(returns => otp_input_1.OtpObjectType),
    __param(0, graphql_1.Args('firstName')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CustomerResolver.prototype, "generateOtp", null);
__decorate([
    graphql_1.Mutation(returns => customer_object_type_1.CustomerObjectType),
    __param(0, graphql_1.Args('firstName')),
    __param(1, graphql_1.Args('otp')),
    __param(2, graphql_1.Args('password')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, String]),
    __metadata("design:returntype", void 0)
], CustomerResolver.prototype, "forgetPassword", null);
CustomerResolver = __decorate([
    graphql_1.Resolver(of => customer_object_type_1.CustomerObjectType),
    __metadata("design:paramtypes", [customer_service_1.CustomerService])
], CustomerResolver);
exports.CustomerResolver = CustomerResolver;
//# sourceMappingURL=customer.resolver.js.map