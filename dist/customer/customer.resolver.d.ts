import { CustomerInputType } from './customer.input';
import { CustomerService } from './customer.service';
export declare class CustomerResolver {
    private customerService;
    constructor(customerService: CustomerService);
    getCustomer(): Promise<import("./customer.entity").Customer[]>;
    signUp(customerInputType: CustomerInputType): Promise<import("./customer.entity").Customer>;
    login(firstName: string, password: string): Promise<import("./customer.entity").Customer>;
    updateProfile(customerInputType: CustomerInputType): Promise<import("./customer.entity").Customer>;
    deleteProfile(id: number): Promise<import("./customer.entity").Customer>;
    updatePassword(id: number, password: string): Promise<import("./customer.entity").Customer>;
    generateOtp(firstName: string): Promise<import("./customer.entity").Customer>;
    forgetPassword(firstName: string, otp: number, password: string): Promise<import("./customer.entity").Customer>;
}
