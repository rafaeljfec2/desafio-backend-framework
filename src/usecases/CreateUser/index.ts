import PostgresAccountRepository from '@modules/infraestructure/repositories/orm/postgres/repository/Account/PostgresAccountRepository';
import { CreateUserController } from './CreateUserController';
import { CreateUserUseCase } from './CreateUserUseCase';

const postgresAccountRepository = new PostgresAccountRepository();
const createUserUseCase = new CreateUserUseCase(postgresAccountRepository);
const createUserController = new CreateUserController(createUserUseCase);

export { createUserUseCase, createUserController };
