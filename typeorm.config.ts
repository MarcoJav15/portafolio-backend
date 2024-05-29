import { DataSource } from "typeorm";

export const dataSource = new DataSource({
    type:'postgres',
    host: 'dpg-cparfj63e1ms739uhh5g-a.oregon-postgres.render.com', 
    port: 5432, 
    username: 'nest_project_nq2c_user', 
    password: 'WUFUrDaWTUzqNDr7vo0TiDHIR57WAs1w',
    database: 'nest_project_nq2c', 
    synchronize: false,
    entities: ['src/**/*.entity.ts'],
    migrations: ['./src/migrations/*.ts'],
});