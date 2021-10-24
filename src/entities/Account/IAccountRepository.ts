import { IAccount } from '@entities/Account/IAccount';
import { ICreateAccountDTO } from './ICreateAccountDTO';

export interface IAccountRepository {
  findByDocument(document: string): Promise<IAccount | undefined>;
  findByEmail(email: string): Promise<IAccount | undefined>;
  findById(id: number): Promise<IAccount | undefined>;
  create(data: ICreateAccountDTO): Promise<IAccount>;
  save(account: IAccount): Promise<IAccount>;
}
