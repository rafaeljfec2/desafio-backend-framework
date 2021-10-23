import { Request, Response } from 'express';
import LoginValidateUseCase from '../LoginValidate/LoginValidateUseCase';
import LoginUseCase from './LoginUseCase';

export default class LoginUseCaseController {
  constructor(
    private loginUseCase: LoginUseCase,
    private loginValidateUseCase: LoginValidateUseCase,
  ) {}

  public async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const account = await this.loginValidateUseCase.execute(email, password);
    const token = await this.loginUseCase.execute(account);

    return response.status(200).json({ auth: true, token: token });
  }
}
