import { BaseEntity } from 'typeorm';
export declare class Todo extends BaseEntity {
    id: number;
    task: string;
    status: string;
}
