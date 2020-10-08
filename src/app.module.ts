import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport/dist/passport.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfig } from './config/database.config';
import { jwtConfig } from './config/jwt.config';
import { CustomerModule } from './customer/customer.module';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      context: ({ req }) => ({ headers: req.headers }),
    }),
    TypeOrmModule.forRoot(databaseConfig),
    CustomerModule,
    TodoModule,
  ],
  controllers: [],
  providers: [],
  // exports: [CustomerModule],
})
export class AppModule {}
