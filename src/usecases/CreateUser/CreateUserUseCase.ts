import { IAccount } from '@modules/entities/Account/IAccount';
import { IAccountRepository } from '@modules/entities/Account/IAccountRepository';
import { ICreateAccountDTO } from '@modules/entities/Account/ICreateAccountDTO';
import AppError from '@modules/shared/errors/AppError';

export class CreateUserUseCase {
  constructor(private accountRepository: IAccountRepository) {}

  public async execute({
    name,
    document,
    email,
    password,
    type,
  }: ICreateAccountDTO): Promise<IAccount> {
    if (await this.accountRepository.findByDocument(document)) {
      throw new AppError('There is already one user with this document', 422);
    }

    if (await this.accountRepository.findByEmail(email)) {
      throw new AppError('There is already one user with this email', 422);
    }

    const user = await this.accountRepository.create({
      name,
      document,
      email,
      password,
      type,
    });

    return user;
  }
}
