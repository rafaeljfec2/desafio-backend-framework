import { IAccount } from '@modules/entities/Account/IAccount';
import Crypt from '@modules/infraestructure/auth/Crypt';
import MemoryAccountRepository from '@modules/infraestructure/repositories/orm/memory/MemoryAccountRepository';
import { UserType } from '@modules/shared/enum/UserType';
import 'reflect-metadata';
import { CreateUserUseCase } from '../CreateUser/CreateUserUseCase';
import LoginValidateUseCase from './LoginValidateUseCase';

let memoryAccountRepository: MemoryAccountRepository;
let createUseUserCase: CreateUserUseCase;
let loginValidateUseCase: LoginValidateUseCase;

describe('Login User', () => {
  beforeEach(() => {
    memoryAccountRepository = new MemoryAccountRepository();
    createUseUserCase = new CreateUserUseCase(
      memoryAccountRepository,
      new Crypt(),
    );
    loginValidateUseCase = new LoginValidateUseCase(
      memoryAccountRepository,
      new Crypt(),
    );
  });

  it('Should be able login user', async () => {
    const account = await createUseUserCase.execute({
      name: 'Rafael',
      document: '1',
      email: 'rafaeljfec@gmail.com',
      password: '123',
      type: UserType.USER,
    });

    const accountLogin = (await loginValidateUseCase.execute(
      account.email,
      '123',
    )) as IAccount;

    expect(accountLogin.document).toEqual('1');
  });
});
