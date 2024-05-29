"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitDatabase1715748237505 = void 0;
class InitDatabase1715748237505 {
    constructor() {
        this.name = 'InitDatabase1715748237505';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "project" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, CONSTRAINT "PK_4d68b1358bb5b766d3e78f32f57" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "project"`);
    }
}
exports.InitDatabase1715748237505 = InitDatabase1715748237505;
//# sourceMappingURL=1715748237505-init_database.js.map