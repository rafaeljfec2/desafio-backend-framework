import { IAccount } from '@entities/Account/IAccount';
import { IAccountRepository } from '@entities/Account/IAccountRepository';
import { ICreateAccountDTO } from '@entities/Account/ICreateAccountDTO';
import { ICrypt } from '@entities/Auth/ICrypt';
import AppError from '@shared/errors/AppError';

export class CreateShopkeeperUseCase {
  constructor(
    private accountRepository: IAccountRepository,
    private crypt: ICrypt,
  ) {}

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

    password = await this.crypt.encrypt(password);

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
