import { IAccount } from '@modules/entities/Account/IAccount';

export interface ICreateMovementDTO {
  account: IAccount;
  value: number;
}
