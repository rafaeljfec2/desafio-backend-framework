import { Request, Response } from 'express';
import { CreateTransferAccountUseCase } from './CreateTransferAccountUseCase';

export class CreateTransferAccountController {
  constructor(
    private createTransferAccountUseCase: CreateTransferAccountUseCase,
  ) {}

  public async handle(request: Request, response: Response): Promise<Response> {
    const { accountPayer, accountPayee, value } = request.body;

    const balance = await this.createTransferAccountUseCase.execute({
      accountPayer,
      accountPayee,
      value,
    });

    return response
      .status(201)
      .json({ accountPayee: accountPayer, balanceCurrent: balance });
  }
}
