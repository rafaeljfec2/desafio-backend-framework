import { IAccountRepository } from '@modules/entities/Account/IAccountRepository';
import { ICreateMovementDTO } from '@modules/entities/Movement/ICreateMovementDTO';
import { IMovementRepository } from '@modules/entities/Movement/IMovementRepository';
import AppError from '@modules/shared/errors/AppError';

export default class CreateDebitAccountUseCase {
  constructor(
    private accountRepository: IAccountRepository,
    private movementRepository: IMovementRepository,
  ) {}

  public async execute({ account, value }: ICreateMovementDTO): Promise<void> {
    const accountExists = await this.accountRepository.findByDocument(
      account.document,
    );

    if (!accountExists) {
      throw new AppError('Account for debit does not exist', 422);
    }

    if (value === 0) {
      throw new AppError('This value of debit invalid', 400);
    }

    account = accountExists;
    value = value * -1;

    const movement = await this.movementRepository.create({
      account,
      value,
    });

    await this.movementRepository.save(movement);
  }
}
