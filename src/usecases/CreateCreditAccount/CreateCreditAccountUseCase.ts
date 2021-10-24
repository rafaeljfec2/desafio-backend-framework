import { IAccountRepository } from '@entities/Account/IAccountRepository';
import { ICreateMovementDTO } from '@entities/Movement/ICreateMovementDTO';
import { IMovementRepository } from '@entities/Movement/IMovementRepository';
import AppError from '@shared/errors/AppError';

export default class CreateCreditAccountUseCase {
  constructor(
    private movementRepository: IMovementRepository,
    private accountRepository: IAccountRepository,
  ) {}

  public async execute({ account, value }: ICreateMovementDTO): Promise<void> {
    const accountExists = await this.accountRepository.findByDocument(
      account.document,
    );

    if (!accountExists) {
      throw new AppError('Account for credit does not exist', 422);
    }

    if (value <= 0) {
      throw new AppError('This value of credit invalid', 400);
    }

    account = accountExists;

    const movement = await this.movementRepository.create({
      account,
      value,
    });

    await this.movementRepository.save(movement);
  }
}
