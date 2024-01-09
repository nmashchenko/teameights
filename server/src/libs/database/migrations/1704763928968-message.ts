import { MigrationInterface, QueryRunner } from "typeorm";

export class Message1704763928968 implements MigrationInterface {
    name = 'Message1704763928968'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "message" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "group" character varying NOT NULL, "read" jsonb NOT NULL, "text" character varying, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP NOT NULL DEFAULT now(), "reactions" jsonb NOT NULL, "senderId" integer, CONSTRAINT "PK_ba01f0a3e0123651915008bc578" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "user" ADD "receivedMessagesId" uuid`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_2cb9671319b58aafd97be5e5334" FOREIGN KEY ("receivedMessagesId") REFERENCES "message"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "message" ADD CONSTRAINT "FK_bc096b4e18b1f9508197cd98066" FOREIGN KEY ("senderId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "message" DROP CONSTRAINT "FK_bc096b4e18b1f9508197cd98066"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_2cb9671319b58aafd97be5e5334"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "receivedMessagesId"`);
        await queryRunner.query(`DROP TABLE "message"`);
    }

}
