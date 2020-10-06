import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CustomerInputType {
  @Field({ nullable: true })
  id: number;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  password: string;
}
