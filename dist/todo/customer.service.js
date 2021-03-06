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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const customer_repository_1 = require("./customer.repository");
let CustomerService = class CustomerService {
    constructor(cutomerRepository) {
        this.cutomerRepository = cutomerRepository;
    }
    async signUp(customerInputType) {
        const { firstName, lastName, password } = customerInputType;
        const customer = await this.cutomerRepository.create({
            firstName,
            lastName,
            password,
        });
        console.log('customer..........', customer);
        return await this.cutomerRepository.save(customer);
    }
    async login(firstName, password) {
        const customer = await this.cutomerRepository.findOne({
            firstName,
            password,
        });
        console.log('customer,...', customer);
        if (customer)
            return customer;
        else
            throw new common_1.UnauthorizedException('Not Exist');
    }
    async getCustomer() {
        return await this.cutomerRepository.find();
    }
    async updateProfile(customerInputType) {
        const { firstName, lastName, password, id } = customerInputType;
        const customer = await this.cutomerRepository.findOne(id);
        if (customer) {
            customer.firstName = firstName;
            customer.lastName = lastName;
            customer.password = password;
            return await this.cutomerRepository.save(customer);
        }
        else {
            throw new common_1.UnauthorizedException('Not Authorized');
        }
    }
    async deleteProfile(id) {
        const customer = await this.cutomerRepository.findOne(id);
        console.log('.customer...', customer);
        return await this.cutomerRepository.remove(customer);
    }
    async updatePassword(id, password) {
        const customer = await this.cutomerRepository.findOne(id);
        if (customer) {
            customer.password = password;
            return await this.cutomerRepository.save(customer);
        }
        else {
            throw new common_1.UnauthorizedException('Not Authorized');
        }
    }
};
CustomerService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(customer_repository_1.CustomerRepository)),
    __metadata("design:paramtypes", [typeof (_a = typeof customer_repository_1.CustomerRepository !== "undefined" && customer_repository_1.CustomerRepository) === "function" ? _a : Object])
], CustomerService);
exports.CustomerService = CustomerService;
//# sourceMappingURL=customer.service.js.map