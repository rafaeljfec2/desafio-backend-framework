import { IAccount } from '@modules/entities/Account/IAccount';
import { IAccountRepository } from '@modules/entities/Account/IAccountRepository';
import { ICrypt } from '@modules/entities/Auth/ICrypt';
import { ILoginValidate } from '@modules/entities/Auth/ILoginValidate';
import AppError from '@modules/shared/errors/AppError';

export default class LoginValidateUseCase implements ILoginValidate {
  constructor(
    private accountRepository: IAccountRepository,
    private crypt: ICrypt,
  ) {}

  public async execute(email: string, password: string): Promise<IAccount> {
    const account = (await this.accountRepository.findByEmail(
      email,
    )) as IAccount;

    if (account && (await this.crypt.compare(password, account.password))) {
      throw new AppError('Account does not exist', 422);
    }

    return account;
  }
}
