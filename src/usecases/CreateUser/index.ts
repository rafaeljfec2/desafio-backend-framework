import Crypt from '@modules/infraestructure/Auth/Crypt';
import PostgresAccountRepository from '@modules/infraestructure/repositories/orm/postgres/repository/Account/PostgresAccountRepository';
import { CreateUserController } from './CreateUserController';
import { CreateUserUseCase } from './CreateUserUseCase';

const createUserUseCase = new CreateUserUseCase(
  new PostgresAccountRepository(),
  new Crypt(),
);
const createUserController = new CreateUserController(createUserUseCase);

export { createUserUseCase, createUserController };
