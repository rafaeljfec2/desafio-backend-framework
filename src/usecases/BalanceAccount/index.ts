import PostgresMovementRepository from '@infraestructure/repositories/orm/postgres/repository/Movement/PostgresMovementRepository';
import PostgresAccountRepository from '@infraestructure/repositories/orm/postgres/repository/Account/PostgresAccountRepository';
import { BalanceAccountController } from './BalanceAccountController';
import { BalanceAccountUseCase } from './BalanceAccountUseCase';

const postgresAccountRepository = new PostgresAccountRepository();
const postgresMovementRepository = new PostgresMovementRepository();
const balanceAccountUseCase = new BalanceAccountUseCase(
  postgresAccountRepository,
  postgresMovementRepository,
);
const balanceAccountController = new BalanceAccountController(
  balanceAccountUseCase,
);

export { balanceAccountController };
