import PostgresMovementRepository from '@modules/infraestructure/repositories/orm/postgres/repository/Movement/PostgresMovementRepository';
import PostgresUserRepository from '@modules/infraestructure/repositories/orm/postgres/repository/User/PostgresUserRepository';
import CreateCreditAccountController from './CreateCreditAccountController';
import CreateCreditAccountUseCase from './CreateCreditAccountUseCase';

const postgresMovementRepository = new PostgresMovementRepository();
const postgresUserRepository = new PostgresUserRepository();
const createCreditAccounUseCase = new CreateCreditAccountUseCase(
  postgresMovementRepository,
  postgresUserRepository,
);
const createCreditAccounController = new CreateCreditAccountController(
  createCreditAccounUseCase,
);

export { createCreditAccounUseCase, createCreditAccounController };
