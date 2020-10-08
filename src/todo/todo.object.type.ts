import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Customer } from 'src/customer/customer.entity';

@ObjectType('Todo')
export class TodoObjectType {
  @Field()
  id: number;

  @Field()
  task: string;

  @Field()
  status: string;

  // @Field(type => [Customer])
  // customer: Customer[];

  @Field()
  customerId: number;
}
