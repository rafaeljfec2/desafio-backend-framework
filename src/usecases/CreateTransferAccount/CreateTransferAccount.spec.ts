import { ICreateMovementDTO } from '@modules/entities/Movement/ICreateMovementDTO';
import Crypt from '@modules/infraestructure/auth/Crypt';
import MemoryAccountRepository from '@modules/infraestructure/repositories/orm/memory/MemoryAccountRepository';
import MemoryMovementRepository from '@modules/infraestructure/repositories/orm/memory/MemoryMovementRepository';
import 'reflect-metadata';
import { BalanceAccountUseCase } from '../BalanceAccount/BalanceAccountUseCase';
import CreateCreditAccountUseCase from '../CreateCreditAccount/CreateCreditAccountUseCase';
import CreateDebitAccountUseCase from '../CreateDebitAccount/CreateDebitAccountUseCase';
import { CreateUserUseCase } from '../CreateUser/CreateUserUseCase';

let memoryMovementRepository: MemoryMovementRepository;
let memoryAccountRepository: MemoryAccountRepository;
let createCreditAccounttUseCase: CreateCreditAccountUseCase;
let createDebitAccountUseCase: CreateDebitAccountUseCase;
let createUseUserCase: CreateUserUseCase;
let balanceAccountUseCase: BalanceAccountUseCase;

describe('Transfers between accounts', () => {
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
    const accountPayer = await createUseUserCase.execute({
      name: 'Payer',
      document: '1',
      email: 'rafael@gmail.com',
      password: '123',
      type: 'USER',
    });

    const accountPayee = await createUseUserCase.execute({
      name: 'Payee',
      document: '2',
      email: 'rafael2@gmail.com',
      password: '123',
      type: 'USER',
    });

    const createCredit: ICreateMovementDTO = {
      account: accountPayee,
      value: 5,
    };
    const createDedit: ICreateMovementDTO = { account: accountPayer, value: 5 };

    await createCreditAccounttUseCase.execute(createCredit);
    await createDebitAccountUseCase.execute(createDedit);
    const balance = await balanceAccountUseCase.execute(accountPayee.document);

    expect(balance).toEqual(5);
  });
});
