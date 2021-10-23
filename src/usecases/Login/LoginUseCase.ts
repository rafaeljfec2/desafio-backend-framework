import { IAccount } from '@modules/entities/Account/IAccount';
import { IAccountRepository } from '@modules/entities/Account/IAccountRepository';
import { ICrypt } from '@modules/entities/Auth/ICrypt';
import { ILogin } from '@modules/entities/Auth/ILogin';
import AppError from '@modules/shared/errors/AppError';
import jwt from 'jsonwebtoken';

export default class LoginUseCase implements ILogin {
  public async execute(account: IAccount): Promise<any> {
    const payload = {
      account: {
        id: account.id,
        email: account.email,
      },
    };

    const token = jwt.sign({ payload }, String(process.env.SECRET), {
      expiresIn: 600,
    });

    return token;
  }
}
