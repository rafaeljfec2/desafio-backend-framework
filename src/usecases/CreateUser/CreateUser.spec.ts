import Crypt from '@modules/infraestructure/auth/Crypt';
import MemoryAccountRepository from '@modules/infraestructure/repositories/orm/memory/MemoryAccountRepository';
import { UserType } from '@modules/shared/enum/UserType';
import 'reflect-metadata';
import { CreateUserUseCase } from './CreateUserUseCase';

let createUseUserCase: CreateUserUseCase;

describe('Credit a account user', () => {
  beforeEach(() => {
    createUseUserCase = new CreateUserUseCase(
      new MemoryAccountRepository(),
      new Crypt(),
    );
  });

  it('Should be able to create account user', async () => {
    const account = await createUseUserCase.execute({
      name: 'Rafael',
      document: '1',
      email: 'rafaeljfec@gmail.com',
      password: '123',
      type: UserType.USER,
    });

    expect(account.id).toBeGreaterThan(0);
  });
});
