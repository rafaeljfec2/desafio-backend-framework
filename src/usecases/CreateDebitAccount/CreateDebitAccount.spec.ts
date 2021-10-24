import { ICreateMovementDTO } from '@entities/Movement/ICreateMovementDTO';
import Crypt from '@infraestructure/auth/Crypt';
import MemoryAccountRepository from '@infraestructure/repositories/orm/memory/MemoryAccountRepository';
import MemoryMovementRepository from '@infraestructure/repositories/orm/memory/MemoryMovementRepository';
import 'reflect-metadata';
import { BalanceAccountUseCase } from '../BalanceAccount/BalanceAccountUseCase';
import CreateCreditAccountUseCase from '../CreateCreditAccount/CreateCreditAccountUseCase';
import { CreateUserUseCase } from '../CreateUser/CreateUserUseCase';
import CreateDebitAccountUseCase from './CreateDebitAccountUseCase';

let memoryMovementRepository: MemoryMovementRepository;
let memoryAccountRepository: MemoryAccountRepository;
let createCreditAccounttUseCase: CreateCreditAccountUseCase;
let createDebitAccountUseCase: CreateDebitAccountUseCase;
let createUseUserCase: CreateUserUseCase;
let balanceAccountUseCase: BalanceAccountUseCase;

describe('Debit a Account', () => {
  beforeEach(() => {
    memoryMovementRepository = new MemoryMovementRepository();
    memoryAccountRepository = new MemoryAccountRepository();
    createCreditAccounttUseCase = new CreateCreditAccountUseCase(
      memoryMovementRepository,
      memoryAccountRepository,
    );
    createDebitAccountUseCase = new CreateDebitAccountUseCase(
      memoryAccountRepository,
      memoryMovementRepository,
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

  it('Should be able to debit origin account.', async () => {
    const account = await createUseUserCase.execute({
      name: 'Rafael',
      document: '09181018673',
      email: 'rafaeljfec@gmail.com',
      password: '123',
      type: 'USER',
    });

    const createCredit: ICreateMovementDTO = { account: account, value: 1 };
    const createDedit: ICreateMovementDTO = { account: account, value: 1 };

    await createCreditAccounttUseCase.execute(createCredit);
    await createDebitAccountUseCase.execute(createDedit);
    const balance = await balanceAccountUseCase.execute(account.document);

    expect(balance).toEqual(0);
  });
});
