import { IAccount } from '@entities/Account/IAccount';
import { IAccountRepository } from '@entities/Account/IAccountRepository';
import { ICrypt } from '@entities/Auth/ICrypt';
import { ILoginValidate } from '@entities/Auth/ILoginValidate';
import AppError from '@shared/errors/AppError';

export default class LoginValidateUseCase implements ILoginValidate {
  constructor(
    private accountRepository: IAccountRepository,
    private crypt: ICrypt,
  ) {}

  public async execute(email: string, password: string): Promise<IAccount> {
    const account = (await this.accountRepository.findByEmail(
      email,
    )) as IAccount;

    if (!account) {
      throw new AppError('Account does not exist', 422);
    }

    if (!(await this.crypt.compare(password, account.password))) {
      throw new AppError('Password invalid', 422);
    }

    return account;
  }
}
