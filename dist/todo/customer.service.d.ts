import { CustomerInputType } from './customer.input';
import { CustomerRepository } from './customer.repository';
export declare class CustomerService {
    private cutomerRepository;
    constructor(cutomerRepository: CustomerRepository);
    signUp(customerInputType: CustomerInputType): Promise<any>;
    login(firstName: string, password: string): Promise<any>;
    getCustomer(): Promise<any>;
    updateProfile(customerInputType: CustomerInputType): Promise<any>;
    deleteProfile(id: any): Promise<any>;
    updatePassword(id: number, password: string): Promise<any>;
}
