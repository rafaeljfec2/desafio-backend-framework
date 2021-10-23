import { IAccount } from '../Account/IAccount';

export interface ILogin {
  execute(account: IAccount): Promise<any>;
}
