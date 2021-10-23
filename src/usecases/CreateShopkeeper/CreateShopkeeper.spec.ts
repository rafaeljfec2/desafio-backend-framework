import Crypt from '@modules/infraestructure/auth/Crypt';
import MemoryAccountRepository from '@modules/infraestructure/repositories/orm/memory/MemoryAccountRepository';
import { UserType } from '@modules/shared/enum/UserType';
import 'reflect-metadata';
import { CreateShopkeeperUseCase } from './CreateShopkeeperUserCase';

let createShopkeeperUseCase: CreateShopkeeperUseCase;

describe('Credit a account user', () => {
  beforeEach(() => {
    createShopkeeperUseCase = new CreateShopkeeperUseCase(
      new MemoryAccountRepository(),
      new Crypt(),
    );
  });

  it('Should be able to create account user', async () => {
    const account = await createShopkeeperUseCase.execute({
      name: 'Rafael',
      document: '1',
      email: 'rafaeljfec@gmail.com',
      password: '123',
      type: UserType.SHOPKEEPER,
    });

    expect(account.id).toBeGreaterThan(0);
  });
});
