import { IUser } from '../User/IUser';

export interface IShopkeeper extends IUser {
  id: number;
  name: string;
  document: string;
  email: string;
  password: string;
  type: string;
  created_at: Date;
}
