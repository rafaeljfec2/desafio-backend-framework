import { IAccountRepository } from '@modules/entities/Account/IAccountRepository';
import { ICreateAccountDTO } from '@modules/entities/Account/ICreateAccountDTO';

export class CreateShopkeeperUseCase {
  constructor(private accountRepository: IAccountRepository) {}

  public async execute({
    name,
    document,
    email,
    password,
    type,
  }: ICreateAccountDTO): Promise<void> {
    const shopkeeper = await this.accountRepository.create({
      name,
      document,
      email,
      password,
      type,
    });

    await this.accountRepository.save(shopkeeper);
  }
}
