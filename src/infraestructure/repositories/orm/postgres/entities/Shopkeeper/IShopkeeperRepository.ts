import { IShopkeeper } from '@modules/entities/Shopkeeper/IShopkeeper';
import { ICreateShopkeeperDTO } from '@modules/usecases/CreateShopkeeper/ICreateShopkeeperDTO';

export interface IShopkeeperRepository {
  findByCpf(cpf: string): Promise<IShopkeeper | undefined>;
  findById(id: number): Promise<IShopkeeper | undefined>;
  create(data: ICreateShopkeeperDTO): Promise<IShopkeeper>;
  save(account: IShopkeeper): Promise<IShopkeeper>;
}
