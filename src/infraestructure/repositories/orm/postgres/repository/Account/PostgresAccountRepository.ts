import { IAccount } from '@entities/Account/IAccount';
import { IAccountRepository } from '@entities/Account/IAccountRepository';
import { ICreateAccountDTO } from '@entities/Account/ICreateAccountDTO';
import { getRepository, Repository } from 'typeorm';
import Account from '../../entities/Account/Account';

export default class PostgresAccountRepository implements IAccountRepository {
  private ormRepository: Repository<Account>;

  public async create({
    name,
    document,
    email,
    password,
    type,
  }: ICreateAccountDTO): Promise<Account> {
    this.ormRepository = getRepository(Account);
    const account = this.ormRepository.create({
      name,
      document,
      email,
      type,
      password,
    });
    return account;
  }

  public async save(account: IAccount): Promise<IAccount> {
    this.ormRepository = getRepository(Account);
    await this.ormRepository.save(account);
    return account;
  }

  public async findByDocument(document: string): Promise<IAccount | undefined> {
    this.ormRepository = getRepository(Account);
    const account = this.ormRepository.findOne({
      where: {
        document,
      },
    });
    return account;
  }

  public async findByEmail(email: string): Promise<IAccount | undefined> {
    this.ormRepository = getRepository(Account);
    const account = this.ormRepository.findOne({
      where: {
        email,
      },
    });
    return account;
  }

  public async findById(id: number): Promise<IAccount | undefined> {
    this.ormRepository = getRepository(Account);
    const account = this.ormRepository.findOne({
      where: {
        id,
      },
    });
    return account;
  }
}
