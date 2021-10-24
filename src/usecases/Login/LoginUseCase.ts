import { IAccount } from '@entities/Account/IAccount';
import { ILogin } from '@entities/Auth/ILogin';
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
