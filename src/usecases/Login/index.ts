import Crypt from '@modules/infraestructure/Auth/Crypt';
import PostgresAccountRepository from '@modules/infraestructure/repositories/orm/postgres/repository/Account/PostgresAccountRepository';
import LoginValidateUseCase from '../LoginValidate/LoginValidateUseCase';
import LoginUseCase from './LoginUseCase';
import LoginUseCaseController from './LoginUseCaseController';

const loginValidateUseCase = new LoginValidateUseCase(
  new PostgresAccountRepository(),
  new Crypt(),
);
const loginUseCase = new LoginUseCase();
const loginUseCaseController = new LoginUseCaseController(
  loginUseCase,
  loginValidateUseCase,
);

export { loginUseCase, loginUseCaseController };
