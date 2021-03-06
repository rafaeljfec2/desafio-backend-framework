import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUser1633892308112 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'account',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'name',
            type: 'varchar(60)',
          },
          {
            name: 'document',
            type: 'varchar(14)',
            isUnique: true,
          },
          {
            name: 'email',
            type: 'varchar(50)',
            isUnique: true,
          },
          {
            name: 'password',
            type: 'varchar(255)',
          },
          {
            name: 'type',
            type: 'varchar(10)',
          },
          {
            name: 'created_at',
            type: 'timestamp with time zone',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('account');
  }
}
