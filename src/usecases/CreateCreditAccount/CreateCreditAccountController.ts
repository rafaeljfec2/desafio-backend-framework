import { Request, Response } from 'express';
import CreateCreditAccountUseCase from './CreateCreditAccountUseCase';

export default class CreateCreditAccountController {
  constructor(private createCreditAccountUseCase: CreateCreditAccountUseCase) {}

  public async handle(request: Request, response: Response): Promise<Response> {
    const { account, value } = request.body;
    await this.createCreditAccountUseCase.execute({ account, value });
    return response.status(201).json();
  }
}
