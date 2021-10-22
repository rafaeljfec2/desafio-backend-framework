import { IAccount } from '@modules/entities/Account/IAccount';

export interface ICreateTranferDTO {
  accountPayer: IAccount;
  accountPayee: IAccount;
  value: number;
}
