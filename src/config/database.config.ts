import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const databaseConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'local',
  username: 'postgres',
  password: 'resolution@123',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};
