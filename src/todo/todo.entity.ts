import { Customer } from 'src/customer/customer.entity';
import {
  BaseEntity,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Todo extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  task: string;

  @Column()
  status: string;

  // @ManyToMany(type => Customer, { cascade: true })
  // @JoinTable({
  //   name: 'todo_cutomer',
  //   joinColumn: { name: 'todoId', referencedColumnName: 'id' },
  //   inverseJoinColumn: { name: 'customerId', referencedColumnName: 'id' },
  // })
  // customer: Customer[];

  @ManyToOne(
    type => Customer,
    customer => customer.id,
  )
  customer: number;
}
