import { IUser } from '@modules/entities/User/IUser';

export interface ICreateCreditAccountDTO {
  user: IUser;
  value: number;
}
