import { IShopkeeper } from '../Shopkeeper/IShopkeeper';
import { IUser } from '../User/IUser';

export interface IMovement {
  id: number;
  user: IUser | IShopkeeper;
  value: number;
  created_at: Date;
}
