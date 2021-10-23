import { IAccount } from '@modules/entities/Account/IAccount';
import { IAccountRepository } from '@modules/entities/Account/IAccountRepository';
import { ICreateAccountDTO } from '@modules/entities/Account/ICreateAccountDTO';
import AppError from '@modules/shared/errors/AppError';

export class CreateShopkeeperUseCase {
  constructor(private accountRepository: IAccountRepository) {}

  public async execute({
    name,
    document,
    email,
    password,
    type,
  }: ICreateAccountDTO): Promise<IAccount> {
    if (await this.accountRepository.findByDocument(document)) {
      throw new AppError(
        'There is already one shopkeeper with this document',
        422,
      );
    }

    if (await this.accountRepository.findByEmail(email)) {
      throw new AppError(
        'There is already one shopkeeper with this email',
        422,
      );
    }

    const shopkeeper = await this.accountRepository.create({
      name,
      document,
      email,
      password,
      type,
    });

    await this.accountRepository.save(shopkeeper);

    return shopkeeper;
  }
}
