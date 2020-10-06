import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class TodoInputType {
  @Field({ nullable: true })
  id: number;

  @Field()
  task: string;

  @Field()
  status: string;
}
