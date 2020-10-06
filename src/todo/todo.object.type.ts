import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType('Todo')
export class TodoObjectType {
  @Field()
  id: number;

  @Field()
  task: string;

  @Field()
  status: string;
}
