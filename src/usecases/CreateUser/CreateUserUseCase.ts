import { IAccount } from '@modules/entities/Account/IAccount';
import { IAccountRepository } from '@modules/entities/Account/IAccountRepository';
import { ICreateAccountDTO } from '@modules/entities/Account/ICreateAccountDTO';

export class CreateUserUseCase {
  constructor(private accountRepository: IAccountRepository) {}

  public async execute({
    name,
    document,
    email,
    password,
    type,
  }: ICreateAccountDTO): Promise<IAccount> {
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
