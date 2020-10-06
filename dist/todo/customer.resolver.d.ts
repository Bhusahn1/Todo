import { CustomerInputType } from './customer.input';
import { CustomerService } from './customer.service';
export declare class CustomerResolver {
    private customerService;
    constructor(customerService: CustomerService);
    getCustomer(): any;
    signUp(customerInputType: CustomerInputType): any;
    login(firstName: string, password: string): any;
    updateProfile(customerInputType: CustomerInputType): any;
    deleteProfile(id: number): any;
    updatePassword(id: number, password: string): any;
}
