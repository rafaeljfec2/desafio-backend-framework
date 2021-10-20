import { IShopkeeperRepository } from '@modules/infraestructure/repositories/orm/postgres/entities/Shopkeeper/IShopkeeperRepository';
import { ICreateShopkeeperDTO } from './ICreateShopkeeperDTO';

export class CreateShopkeeperUseCase {
  constructor(private shopkeeperRepository: IShopkeeperRepository) {}

  public async execute({
    name,
    document,
    email,
    password,
    type,
  }: ICreateShopkeeperDTO): Promise<void> {
    const shopkeeper = await this.shopkeeperRepository.create({
      name,
      document,
      email,
      password,
      type,
    });

    await this.shopkeeperRepository.save(shopkeeper);
  }
}
