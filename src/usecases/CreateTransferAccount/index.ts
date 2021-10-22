import PostgresAccountRepository from '@modules/infraestructure/repositories/orm/postgres/repository/Account/PostgresAccountRepository';
import PostgresMovementRepository from '@modules/infraestructure/repositories/orm/postgres/repository/Movement/PostgresMovementRepository';
import { BalanceAccountUseCase } from '../BalanceAccount/BalanceAccountUseCase';
import CreateCreditAccountUseCase from '../CreateCreditAccount/CreateCreditAccountUseCase';
import CreateDebitAccountUseCase from '../CreateDebitAccount/CreateDebitAccountUseCase';
import { CreateTransferAccountController } from './CreateTransferAccountController';
import { CreateTransferAccountUseCase } from './CreateTransferAccountUseCase';

const createTransferAccountUseCase = new CreateTransferAccountUseCase(
  new CreateCreditAccountUseCase(
    new PostgresMovementRepository(),
    new PostgresAccountRepository(),
  ),
  new CreateDebitAccountUseCase(
    new PostgresAccountRepository(),
    new PostgresMovementRepository(),
  ),
  new BalanceAccountUseCase(
    new PostgresAccountRepository(),
    new PostgresMovementRepository(),
  ),
);

const createTransferAccountController = new CreateTransferAccountController(
  createTransferAccountUseCase,
);

export { createTransferAccountUseCase, createTransferAccountController };
