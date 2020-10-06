import { Field, ObjectType } from '@nestjs/graphql';

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
