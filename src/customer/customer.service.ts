import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from './customer.entity';
import { CustomerInputType } from './customer.input';
import { CustomerObjectType } from './customer.object.type';
import { CustomerRepository } from './customer.repository';
import { OtpObjectType } from './otp.input';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(CustomerRepository)
    private cutomerRepository: CustomerRepository,
  ) {}

  async signUp(customerInputType: CustomerInputType) {
    const { firstName, lastName, password } = customerInputType;
    const customer = await this.cutomerRepository.create({
      firstName,
      lastName,
      password,
    });
    return await this.cutomerRepository.save(customer);
  }

  async login(firstName: string, password: string) {
    const customer = await this.cutomerRepository.findOne({
      firstName,
      password,
    });
    if (customer) return customer;
    else throw new UnauthorizedException('User name or password invalid');
  }

  async getCustomer() {
    return await this.cutomerRepository.find();
  }

  async updateProfile(customerInputType: CustomerInputType) {
    const { firstName, lastName, password, id } = customerInputType;
    const customer = await this.cutomerRepository.findOne(id);
    if (customer) {
      customer.firstName = firstName;
      customer.lastName = lastName;
      customer.password = password;
      return await this.cutomerRepository.save(customer);
    } else {
      throw new UnauthorizedException('Not Authorized');
    }
  }

  async deleteProfile(id) {
    const customer = await this.cutomerRepository.findOne(id);
    if (customer) {
      return await this.cutomerRepository.remove(customer);
    } else {
      throw new NotFoundException(`No user found`);
    }
  }

  async updatePassword(id: number, password: string) {
    const customer = await this.cutomerRepository.findOne(id);
    if (customer) {
      customer.password = password;
      return await this.cutomerRepository.save(customer);
    } else {
      throw new NotFoundException(`No user found`);
    }
  }

  async generateOtp(firstName: string) {
    // const { firstName } = otpInputType;
    const customer = await this.cutomerRepository.findOne({ firstName });
    let otp = Math.floor(1000 + Math.random() * 9000);
    if (customer) {
      customer.otp = otp;
      return await this.cutomerRepository.save(customer);
    }
  }

  async forgetPassword(firstName: string, otp: number, password: string) {
    const customer = await this.cutomerRepository.findOne({ firstName, otp });
    if (customer) {
      customer.password = password;
      return await this.cutomerRepository.save(customer);
    }
  }
}
