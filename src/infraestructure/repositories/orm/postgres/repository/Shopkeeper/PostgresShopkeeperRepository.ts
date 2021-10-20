import { IShopkeeper } from '@modules/entities/Shopkeeper/IShopkeeper';
import { ICreateShopkeeperDTO } from '@modules/usecases/CreateShopkeeper/ICreateShopkeeperDTO';
import { getRepository, Repository } from 'typeorm';
import { IShopkeeperRepository } from '../../entities/Shopkeeper/IShopkeeperRepository';
import User from '../../entities/User/User';

export default class PostgresShopkeeperRepository
  implements IShopkeeperRepository
{
  private ormRepository: Repository<User>;

  public async create({
    name,
    document,
    email,
    password,
    type,
  }: ICreateShopkeeperDTO): Promise<IShopkeeper> {
    this.ormRepository = getRepository(User);
    const shopkeeper = this.ormRepository.create({
      name,
      document,
      email,
      type,
      password,
    });
    await this.ormRepository.save(shopkeeper);
    return shopkeeper;
  }

  public async save(shopkeeper: IShopkeeper): Promise<IShopkeeper> {
    this.ormRepository = getRepository(User);
    await this.ormRepository.save(shopkeeper);
    return shopkeeper;
  }

  public async findByDocument(
    document: string,
  ): Promise<IShopkeeper | undefined> {
    this.ormRepository = getRepository(User);
    const shopkeeper = this.ormRepository.findOne({
      where: {
        document,
      },
    });
    return shopkeeper;
  }

  public async findByEmail(email: string): Promise<IShopkeeper | undefined> {
    this.ormRepository = getRepository(User);
    const shopkeeper = this.ormRepository.findOne({
      where: {
        email,
      },
    });

    return shopkeeper;
  }

  public async findById(id: number): Promise<IShopkeeper | undefined> {
    this.ormRepository = getRepository(User);
    const shopkeeper = this.ormRepository.findOne({
      where: {
        id,
      },
    });
    return shopkeeper;
  }
}
