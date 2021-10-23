import { IAccount } from '../Account/IAccount';

export interface ILoginValidate {
  execute(email: string, password: string): Promise<IAccount>;
}
