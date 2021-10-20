import PostgresShopkeeperRepository from '@modules/infraestructure/repositories/orm/postgres/repository/Shopkeeper/PostgresShopkeeperRepository';
import { CreateShopkeeperController } from './CreateShopkeeperController';
import { CreateShopkeeperUseCase } from './CreateShopkeeperUserCase';

const postgresShopkeeperRepository = new PostgresShopkeeperRepository();
const createShopkeeperUseCase = new CreateShopkeeperUseCase(
  postgresShopkeeperRepository,
);
const createShopkeeperController = new CreateShopkeeperController(
  createShopkeeperUseCase,
);

export { createShopkeeperUseCase, createShopkeeperController };
