import PostgresAccountRepository from '@modules/infraestructure/repositories/orm/postgres/repository/Account/PostgresAccountRepository';
import { CreateShopkeeperController } from './CreateShopkeeperController';
import { CreateShopkeeperUseCase } from './CreateShopkeeperUserCase';

const postgresAccountRepository = new PostgresAccountRepository();
const createShopkeeperUseCase = new CreateShopkeeperUseCase(
  postgresAccountRepository,
);
const createShopkeeperController = new CreateShopkeeperController(
  createShopkeeperUseCase,
);

export { createShopkeeperUseCase, createShopkeeperController };
