import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { check } from 'prettier';
import { Customer } from './customer.entity';
import { CustomerInputType } from './customer.input';
import { CustomerObjectType } from './customer.object.type';
import { CustomerRepository } from './customer.repository';
import { OtpObjectType } from './otp.input';
import * as jwt from 'jsonwebtoken';
@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(CustomerRepository)
    private cutomerRepository: CustomerRepository,
  ) {}

  async signUp(customerInputType: CustomerInputType) {
    const { firstName, lastName, password } = customerInputType;

    const check = this.cutomerRepository.findOne({ firstName });
    if (check) {
      const customer = await this.cutomerRepository.create({
        firstName,
        lastName,
        password,
      });
      try {
        return await this.cutomerRepository.save(customer);
      } catch (exception) {
        throw exception;
      }
    } else {
      throw new ConflictException('User name already exist');
    }
  }

  async login(firstName: string, password: string) {
    const customer = await this.cutomerRepository.findOne({
      firstName,
      password,
    });
    console.log('.customer...', customer);
    if (customer) {
      // const token = await this.jwtService.sign({ firstName });

      const token = await jwt.sign({ firstName }, 'demoapp');
      console.log('token.......', token);
      return {
        token,
      };
    } else {
      throw new UnauthorizedException('User name or password invalid');
    }
  }

  async getCustomer(id: number) {
    console.log('==============', this.cutomerRepository);

    const customer = await this.cutomerRepository.findOne({ id });
    console.log('==============', customer);
    return customer;
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
    const customer = await this.cutomerRepository.findOne({ firstName });
    if (customer) {
      if (customer.otp == otp) {
        customer.password = password;
        return await this.cutomerRepository.save(customer);
      } else {
        throw new UnauthorizedException(
          'You are not authorized to change the password',
        );
      }
    }

    throw new UnauthorizedException(
      'You are not authorized to change the password',
    );
  }
}

// Nestjs , TypeORM , PostgreSQL, and GraphQL
