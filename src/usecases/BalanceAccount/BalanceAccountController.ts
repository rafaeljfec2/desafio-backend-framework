import { Request, Response } from 'express';
import { BalanceAccountUseCase } from './BalanceAccountUseCase';

export class BalanceAccountController {
  constructor(private balanceAccountUseCase: BalanceAccountUseCase) {}

  public async handle(request: Request, response: Response): Promise<Response> {
    const document = request.params.document;
    return response
      .status(200)
      .json({ value: await this.balanceAccountUseCase.execute(document) });
  }
}
