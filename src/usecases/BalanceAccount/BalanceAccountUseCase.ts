import { IAccountRepository } from '@modules/infraestructure/repositories/orm/postgres/entities/Account/IAccountRepository';
import { IMovementRepository } from '@modules/infraestructure/repositories/orm/postgres/entities/Movement/IMovementRepository';
import AppError from '@modules/shared/errors/AppError';

export class BalanceAccountUseCase {
  constructor(
    private accountRepository: IAccountRepository,
    private movementRepository: IMovementRepository,
  ) {}

  public async execute(document: string): Promise<number> {
    if (!this.accountRepository.findByDocument(document)) {
      throw new AppError('Account does not exist', 404);
    }

    const balance = await this.movementRepository.balance(document);

    return Number(balance);
  }
}
