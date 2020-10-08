import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class TokenObjectType {
  @Field()
  token: string;
}
