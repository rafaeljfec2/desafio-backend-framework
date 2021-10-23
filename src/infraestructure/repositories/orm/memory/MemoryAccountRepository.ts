import { IAccount } from '@modules/entities/Account/IAccount';
import { IAccountRepository } from '@modules/entities/Account/IAccountRepository';
import { ICreateAccountDTO } from '@modules/entities/Account/ICreateAccountDTO';
import { randomInt } from 'crypto';

export default class MemoryAccountRepository implements IAccountRepository {
  private accounts: IAccount[] = [];

  public async create({
    name,
    document,
    email,
    password,
    type,
  }: ICreateAccountDTO): Promise<IAccount> {
    const account = {} as IAccount;

    account.id = randomInt(5);
    account.document = document;
    account.name = name;
    account.email = email;
    account.password = password;
    account.type = type;
    account.created_at = new Date();

    return account;
  }
  public async save(account: IAccount): Promise<IAccount> {
    this.accounts.push(account);
    return account;
  }

  public async findByDocument(document: string): Promise<IAccount | undefined> {
    const account = this.accounts.find(
      account => account.document === document,
    );
    return account;
  }

  public async findById(id: number): Promise<IAccount | undefined> {
    const account = this.accounts.find(account => account.id === id);
    return account;
  }
  public async findByEmail(email: string): Promise<IAccount | undefined> {
    const account = this.accounts.find(account => account.email === email);
    return account;
  }
}
