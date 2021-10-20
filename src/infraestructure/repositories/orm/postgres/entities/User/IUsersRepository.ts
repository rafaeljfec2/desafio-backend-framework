import { IUser } from '@modules/entities/User/IUser';
import { ICreateUserDTO } from '@modules/usecases/CreateUser/ICreateUserDTO';

export interface IUsersRepository {
  findByDocument(document: string): Promise<IUser | undefined>;
  findByEmail(email: string): Promise<IUser | undefined>;
  findById(id: number): Promise<IUser | undefined>;
  create(data: ICreateUserDTO): Promise<IUser>;
  save(account: IUser): Promise<IUser>;
}
