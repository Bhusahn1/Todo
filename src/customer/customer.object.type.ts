import { Field, ObjectType } from '@nestjs/graphql';
import { IsNotEmpty, MinLength } from 'class-validator';

@ObjectType('Otp')
export class CustomerObjectType {
  @Field()
  id: number;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  password: string;
}
