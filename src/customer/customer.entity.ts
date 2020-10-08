import { IsEmail, MaxLength, MinLength } from 'class-validator';
import { Todo } from 'src/todo/todo.entity';
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';

@Entity()
@Unique(['firstName'])
export class Customer extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  // @Column()
  // username:string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  password: string;

  @Column({ default: null })
  otp: number;
}
