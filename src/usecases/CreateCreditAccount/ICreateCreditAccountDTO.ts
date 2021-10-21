import { IAccount } from '@modules/entities/Account/IAccount';

export interface ICreateCreditAccountDTO {
  account: IAccount;
  value: number;
}
