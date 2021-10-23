import { ICreateMovementDTO } from '@modules/entities/Movement/ICreateMovementDTO';
import Crypt from '@modules/infraestructure/auth/Crypt';
import MemoryAccountRepository from '@modules/infraestructure/repositories/orm/memory/MemoryAccountRepository';
import MemoryMovementRepository from '@modules/infraestructure/repositories/orm/memory/MemoryMovementRepository';
import 'reflect-metadata';
import { BalanceAccountUseCase } from './BalanceAccountUseCase';
import CreateCreditAccountUseCase from '../CreateCreditAccount/CreateCreditAccountUseCase';
import { CreateUserUseCase } from '../CreateUser/CreateUserUseCase';

let memoryMovementRepository: MemoryMovementRepository;
let memoryAccountRepository: MemoryAccountRepository;
let createCreditAccounttUseCase: CreateCreditAccountUseCase;
let createUseUserCase: CreateUserUseCase;
let balanceAccountUseCase: BalanceAccountUseCase;

describe('Balance a Account', () => {
  beforeEach(() => {
    memoryMovementRepository = new MemoryMovementRepository();
    memoryAccountRepository = new MemoryAccountRepository();
    createCreditAccounttUseCase = new CreateCreditAccountUseCase(
      memoryMovementRepository,
      memoryAccountRepository,
    );
    createUseUserCase = new CreateUserUseCase(
      memoryAccountRepository,
      new Crypt(),
    );
    balanceAccountUseCase = new BalanceAccountUseCase(
      memoryAccountRepository,
      memoryMovementRepository,
    );
  });

  it('Should be able to balance account.', async () => {
    const account = await createUseUserCase.execute({
      name: 'Rafael',
      document: '09181018673',
      email: 'rafaeljfec@gmail.com',
      password: '123',
      type: 'USER',
    });

    const createCredit: ICreateMovementDTO = { account: account, value: 1 };

    await createCreditAccounttUseCase.execute(createCredit);
    const balance = await balanceAccountUseCase.execute(account.document);

    expect(balance).toEqual(1);
  });
});
