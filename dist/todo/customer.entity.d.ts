import { BaseEntity } from 'typeorm';
export declare class Customer extends BaseEntity {
    id: number;
    firstName: string;
    lastName: string;
    password: string;
}
