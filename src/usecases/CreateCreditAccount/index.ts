import PostgresMovementRepository from '@infraestructure/repositories/orm/postgres/repository/Movement/PostgresMovementRepository';
import PostgresUserRepository from '@infraestructure/repositories/orm/postgres/repository/Account/PostgresAccountRepository';
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

export { createCreditAccounController };
