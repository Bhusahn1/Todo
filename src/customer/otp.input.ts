import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType('Customer')
export class OtpObjectType {
  @Field()
  id: number;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  password: string;

  @Field()
  otp: number;
}
