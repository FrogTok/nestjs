import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeORMConfig : TypeOrmModuleOptions = {
    //database type
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'a789456z',
    database: 'board-app',
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: true
}