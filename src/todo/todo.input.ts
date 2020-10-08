import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class TodoInputType {
  @Field({ nullable: true })
  id: number;

  @Field()
  @IsNotEmpty()
  task: string;

  @Field()
  @IsNotEmpty()
  status: string;

  @Field()
  customerId: number;
}
