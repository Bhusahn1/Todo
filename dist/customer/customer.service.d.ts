import { Customer } from './customer.entity';
import { CustomerInputType } from './customer.input';
import { CustomerRepository } from './customer.repository';
export declare class CustomerService {
    private cutomerRepository;
    constructor(cutomerRepository: CustomerRepository);
    signUp(customerInputType: CustomerInputType): Promise<Customer>;
    login(firstName: string, password: string): Promise<Customer>;
    getCustomer(): Promise<Customer[]>;
    updateProfile(customerInputType: CustomerInputType): Promise<Customer>;
    deleteProfile(id: any): Promise<Customer>;
    updatePassword(id: number, password: string): Promise<Customer>;
    generateOtp(firstName: string): Promise<Customer>;
    forgetPassword(firstName: string, otp: number, password: string): Promise<Customer>;
}
