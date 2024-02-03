import { MigrationInterface, QueryRunner } from "typeorm";

export class Chat1706963811945 implements MigrationInterface {
    name = 'Chat1706963811945'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "role" ("id" integer NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_b36bcfe02fc8de3c57a8b2391c2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "status" ("id" integer NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_e12743a7086ec826733f54e1d95" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "file" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "path" character varying NOT NULL, CONSTRAINT "PK_36b46d232307066b3a2c9ea3a1d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "universities" ("id" SERIAL NOT NULL, "university" character varying NOT NULL, "degree" character varying NOT NULL, "major" character varying NOT NULL, "admissionDate" date NOT NULL, "graduationDate" date, "userId" integer, CONSTRAINT "PK_8da52f2cee6b407559fdbabf59e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "jobs" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "company" character varying NOT NULL, "startDate" date NOT NULL, "endDate" date, "userId" integer, CONSTRAINT "PK_cf0a6c42b72fcc7f7c237def345" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "projects" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "link" character varying NOT NULL, "userId" integer, CONSTRAINT "PK_6271df0a7aed1d6c0691ce6ac50" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "links" ("id" SERIAL NOT NULL, "github" character varying, "linkedIn" character varying, "behance" character varying, "telegram" character varying, CONSTRAINT "PK_ecf17f4a741d3c5ba0b4c5ab4b6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "skills" ("id" SERIAL NOT NULL, "speciality" character varying NOT NULL, "focus" character varying NOT NULL, "coreTools" text array NOT NULL, "additionalTools" text array, CONSTRAINT "PK_0d3212120f4ecedf90864d7e298" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."notification_type_enum" AS ENUM('system', 'team_invitation')`);
        await queryRunner.query(`CREATE TABLE "notification" ("id" SERIAL NOT NULL, "read" boolean NOT NULL DEFAULT false, "type" "public"."notification_type_enum" NOT NULL, "data" jsonb NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP WITH TIME ZONE, "receiverId" integer, CONSTRAINT "PK_705b6c7cdf9b2c2ff7ac7872cb7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "message" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "read" jsonb NOT NULL, "text" character varying NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP WITH TIME ZONE, "reactions" jsonb NOT NULL DEFAULT '{}', "senderId" integer, "chatGroupId" uuid, CONSTRAINT "PK_ba01f0a3e0123651915008bc578" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "chat_user" ("id" SERIAL NOT NULL, CONSTRAINT "PK_15d83eb496fd7bec7368b30dbf3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "email" character varying, "password" character varying, "username" character varying, "provider" character varying NOT NULL DEFAULT 'email', "socialId" character varying, "fullName" character varying, "isLeader" boolean, "country" character varying, "dateOfBirth" TIMESTAMP WITH TIME ZONE, "description" character varying, "experience" character varying, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP WITH TIME ZONE, "photoId" uuid, "roleId" integer, "statusId" integer, "skillsId" integer, "linksId" integer, "chatId" integer, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb" UNIQUE ("username"), CONSTRAINT "REL_0e51e612eb9ed2fa5ac4f44c7e" UNIQUE ("skillsId"), CONSTRAINT "REL_c5a79824fd8a241f5a7ec428b3" UNIQUE ("linksId"), CONSTRAINT "REL_1cfa1784ac9e67d4be782f4e5b" UNIQUE ("chatId"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_9bd2fe7a8e694dedc4ec2f666f" ON "user" ("socialId") `);
        await queryRunner.query(`CREATE INDEX "IDX_035190f70c9aff0ef331258d28" ON "user" ("fullName") `);
        await queryRunner.query(`CREATE INDEX "IDX_8bceb9ec5c48c54f7a3f11f31b" ON "user" ("isLeader") `);
        await queryRunner.query(`CREATE INDEX "IDX_5cb2b3e0419a73a360d327d497" ON "user" ("country") `);
        await queryRunner.query(`CREATE TABLE "chat_group" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "description" character varying NOT NULL, "roles" jsonb NOT NULL DEFAULT '{"member":[],"owner":[0,1,2,3,4,5,6,7,8]}', "roleAppointments" jsonb NOT NULL DEFAULT '{}', "referencedMessages" jsonb NOT NULL DEFAULT '{}', "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP WITH TIME ZONE, "ownerId" integer, CONSTRAINT "PK_4615844ed379806de3ff7c51a5a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "session" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "userId" integer, CONSTRAINT "PK_f55da76ac1c3ac420f444d2ff11" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_3d2f174ef04fb312fdebd0ddc5" ON "session" ("userId") `);
        await queryRunner.query(`CREATE TABLE "chat_user_received_messages_message" ("chatUserId" integer NOT NULL, "messageId" uuid NOT NULL, CONSTRAINT "PK_cd94010255e474356d0513a0767" PRIMARY KEY ("chatUserId", "messageId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_5391c514c900e65785c2f43e65" ON "chat_user_received_messages_message" ("chatUserId") `);
        await queryRunner.query(`CREATE INDEX "IDX_d7a6980da5585e3c7b66f0b456" ON "chat_user_received_messages_message" ("messageId") `);
        await queryRunner.query(`CREATE TABLE "chat_group_members_user" ("chatGroupId" uuid NOT NULL, "userId" integer NOT NULL, CONSTRAINT "PK_d87da7c58cb4e479292864f1e8a" PRIMARY KEY ("chatGroupId", "userId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_6142752a30e34fabc292908a1d" ON "chat_group_members_user" ("chatGroupId") `);
        await queryRunner.query(`CREATE INDEX "IDX_edf238915c8b31e5a788451e3b" ON "chat_group_members_user" ("userId") `);
        await queryRunner.query(`ALTER TABLE "universities" ADD CONSTRAINT "FK_a8ad75b47a153c0d91f8360c9fb" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "jobs" ADD CONSTRAINT "FK_79ae682707059d5f7655db4212a" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "projects" ADD CONSTRAINT "FK_361a53ae58ef7034adc3c06f09f" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "notification" ADD CONSTRAINT "FK_758d70a0e61243171e785989070" FOREIGN KEY ("receiverId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "message" ADD CONSTRAINT "FK_bc096b4e18b1f9508197cd98066" FOREIGN KEY ("senderId") REFERENCES "chat_user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "message" ADD CONSTRAINT "FK_3c80ee9af82a0cda99f1d210edb" FOREIGN KEY ("chatGroupId") REFERENCES "chat_group"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_75e2be4ce11d447ef43be0e374f" FOREIGN KEY ("photoId") REFERENCES "file"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_c28e52f758e7bbc53828db92194" FOREIGN KEY ("roleId") REFERENCES "role"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_dc18daa696860586ba4667a9d31" FOREIGN KEY ("statusId") REFERENCES "status"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_0e51e612eb9ed2fa5ac4f44c7e1" FOREIGN KEY ("skillsId") REFERENCES "skills"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_c5a79824fd8a241f5a7ec428b3e" FOREIGN KEY ("linksId") REFERENCES "links"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_1cfa1784ac9e67d4be782f4e5b8" FOREIGN KEY ("chatId") REFERENCES "chat_user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "chat_group" ADD CONSTRAINT "FK_af456848017b57ea9752355e6eb" FOREIGN KEY ("ownerId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "session" ADD CONSTRAINT "FK_3d2f174ef04fb312fdebd0ddc53" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "chat_user_received_messages_message" ADD CONSTRAINT "FK_5391c514c900e65785c2f43e65a" FOREIGN KEY ("chatUserId") REFERENCES "chat_user"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "chat_user_received_messages_message" ADD CONSTRAINT "FK_d7a6980da5585e3c7b66f0b4564" FOREIGN KEY ("messageId") REFERENCES "message"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "chat_group_members_user" ADD CONSTRAINT "FK_6142752a30e34fabc292908a1de" FOREIGN KEY ("chatGroupId") REFERENCES "chat_group"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "chat_group_members_user" ADD CONSTRAINT "FK_edf238915c8b31e5a788451e3b9" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "chat_group_members_user" DROP CONSTRAINT "FK_edf238915c8b31e5a788451e3b9"`);
        await queryRunner.query(`ALTER TABLE "chat_group_members_user" DROP CONSTRAINT "FK_6142752a30e34fabc292908a1de"`);
        await queryRunner.query(`ALTER TABLE "chat_user_received_messages_message" DROP CONSTRAINT "FK_d7a6980da5585e3c7b66f0b4564"`);
        await queryRunner.query(`ALTER TABLE "chat_user_received_messages_message" DROP CONSTRAINT "FK_5391c514c900e65785c2f43e65a"`);
        await queryRunner.query(`ALTER TABLE "session" DROP CONSTRAINT "FK_3d2f174ef04fb312fdebd0ddc53"`);
        await queryRunner.query(`ALTER TABLE "chat_group" DROP CONSTRAINT "FK_af456848017b57ea9752355e6eb"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_1cfa1784ac9e67d4be782f4e5b8"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_c5a79824fd8a241f5a7ec428b3e"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_0e51e612eb9ed2fa5ac4f44c7e1"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_dc18daa696860586ba4667a9d31"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_c28e52f758e7bbc53828db92194"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_75e2be4ce11d447ef43be0e374f"`);
        await queryRunner.query(`ALTER TABLE "message" DROP CONSTRAINT "FK_3c80ee9af82a0cda99f1d210edb"`);
        await queryRunner.query(`ALTER TABLE "message" DROP CONSTRAINT "FK_bc096b4e18b1f9508197cd98066"`);
        await queryRunner.query(`ALTER TABLE "notification" DROP CONSTRAINT "FK_758d70a0e61243171e785989070"`);
        await queryRunner.query(`ALTER TABLE "projects" DROP CONSTRAINT "FK_361a53ae58ef7034adc3c06f09f"`);
        await queryRunner.query(`ALTER TABLE "jobs" DROP CONSTRAINT "FK_79ae682707059d5f7655db4212a"`);
        await queryRunner.query(`ALTER TABLE "universities" DROP CONSTRAINT "FK_a8ad75b47a153c0d91f8360c9fb"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_edf238915c8b31e5a788451e3b"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_6142752a30e34fabc292908a1d"`);
        await queryRunner.query(`DROP TABLE "chat_group_members_user"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_d7a6980da5585e3c7b66f0b456"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_5391c514c900e65785c2f43e65"`);
        await queryRunner.query(`DROP TABLE "chat_user_received_messages_message"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_3d2f174ef04fb312fdebd0ddc5"`);
        await queryRunner.query(`DROP TABLE "session"`);
        await queryRunner.query(`DROP TABLE "chat_group"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_5cb2b3e0419a73a360d327d497"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_8bceb9ec5c48c54f7a3f11f31b"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_035190f70c9aff0ef331258d28"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_9bd2fe7a8e694dedc4ec2f666f"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "chat_user"`);
        await queryRunner.query(`DROP TABLE "message"`);
        await queryRunner.query(`DROP TABLE "notification"`);
        await queryRunner.query(`DROP TYPE "public"."notification_type_enum"`);
        await queryRunner.query(`DROP TABLE "skills"`);
        await queryRunner.query(`DROP TABLE "links"`);
        await queryRunner.query(`DROP TABLE "projects"`);
        await queryRunner.query(`DROP TABLE "jobs"`);
        await queryRunner.query(`DROP TABLE "universities"`);
        await queryRunner.query(`DROP TABLE "file"`);
        await queryRunner.query(`DROP TABLE "status"`);
        await queryRunner.query(`DROP TABLE "role"`);
    }

}
