import PostgresUserRepository from '@modules/infraestructure/repositories/orm/postgres/repository/PostgresUserRepository';
import { CreateUserController } from './CreateUserController';
import { CreateUserUseCase } from './CreateUserUseCase';

const postgresUserRepository = new PostgresUserRepository();
const createUserUseCase = new CreateUserUseCase(postgresUserRepository);
const createUserController = new CreateUserController(createUserUseCase);

export { createUserUseCase, createUserController };
