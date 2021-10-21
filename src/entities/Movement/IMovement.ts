import { IAccount } from '../Account/IAccount';

export interface IMovement {
  id: number;
  account: IAccount;
  value: number;
  created_at: Date;
}
