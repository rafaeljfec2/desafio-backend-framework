import { ICreateMovementDTO } from '@modules/entities/Movement/ICreateMovementDTO';
import AppError from '@modules/shared/errors/AppError';
import { BalanceAccountUseCase } from '../BalanceAccount/BalanceAccountUseCase';
import CreateCreditAccountUseCase from '../CreateCreditAccount/CreateCreditAccountUseCase';
import CreateDebitAccountUseCase from '../CreateDebitAccount/CreateDebitAccountUseCase';
import { ICreateTranferDTO } from './ICreateTranferDTO';

export class CreateTransferAccountUseCase {
  constructor(
    private createCreditAccountUseCase: CreateCreditAccountUseCase,
    private createDebitAccountUseCase: CreateDebitAccountUseCase,
    private balanceAccountUseCase: BalanceAccountUseCase,
  ) {}

  public async execute({
    accountPayer,
    accountPayee,
    value,
  }: ICreateTranferDTO): Promise<number> {
    const accountCredit: ICreateMovementDTO = {
      account: accountPayee,
      value: value,
    };
    const accountDebit: ICreateMovementDTO = {
      account: accountPayer,
      value: value,
    };

    const balanceAccount =
      Number(await this.balanceAccountUseCase.execute(accountPayer.document)) -
      value;

    if (balanceAccount < 0) {
      throw new AppError('Insufficient balance for transfer', 422);
    }

    await this.createCreditAccountUseCase.execute(accountCredit);
    await this.createDebitAccountUseCase.execute(accountDebit);

    return balanceAccount;
  }
}
