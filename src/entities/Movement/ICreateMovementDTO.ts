import { IAccount } from '@entities/Account/IAccount';

export interface ICreateMovementDTO {
  account: IAccount;
  value: number;
}
