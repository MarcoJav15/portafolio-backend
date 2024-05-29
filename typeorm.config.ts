import { DataSource } from "typeorm";

export const dataSource = new DataSource({
    type:'postgres',
    host: 'viaduct.proxy.rlwy.net', 
    port: 32597, 
    username: 'postgres', 
    password: 'BCIqcaLjVxZQSFIYkkjxqaFgtPgmVmsv',
    database: 'railway', 
    synchronize: false,
    entities: ['src/**/*.entity.ts'],
    migrations: ['./src/migrations/*.ts'],
});