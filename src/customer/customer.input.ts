import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';

@InputType()
export class CustomerInputType {
  @Field({ nullable: true })
  id: number;

  @Field()
  firstName: string;

  @Field()
  @MaxLength(2)
  lastName: string;

  @Field()
  @IsNotEmpty()
  password: string;
}
