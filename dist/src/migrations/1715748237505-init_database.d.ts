import { MigrationInterface, QueryRunner } from "typeorm";
export declare class InitDatabase1715748237505 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
