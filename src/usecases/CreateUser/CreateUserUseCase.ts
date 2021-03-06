import { IAccount } from '@entities/Account/IAccount';
import { IAccountRepository } from '@entities/Account/IAccountRepository';
import { ICreateAccountDTO } from '@entities/Account/ICreateAccountDTO';
import { ICrypt } from '@entities/Auth/ICrypt';
import AppError from '@shared/errors/AppError';

export class CreateUserUseCase {
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
      throw new AppError('There is already one user with this document', 422);
    }

    if (await this.accountRepository.findByEmail(email)) {
      throw new AppError('There is already one user with this email', 422);
    }

    password = await this.crypt.encrypt(password);

    const user = await this.accountRepository.create({
      name,
      document,
      email,
      password,
      type,
    });

    await this.accountRepository.save(user);

    return user;
  }
}
