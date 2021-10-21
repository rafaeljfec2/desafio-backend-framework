import { IAccountRepository } from '@modules/infraestructure/repositories/orm/postgres/entities/Account/IAccountRepository';
import { IMovementRepository } from '@modules/infraestructure/repositories/orm/postgres/entities/Movement/IMovementRepository';
import AppError from '@modules/shared/errors/AppError';
import { ICreateCreditAccountDTO } from './ICreateCreditAccountDTO';

export default class CreateCreditAccountUseCase {
  constructor(
    private movementRepository: IMovementRepository,
    private accountRepository: IAccountRepository,
  ) {}

  public async execute({
    account,
    value,
  }: ICreateCreditAccountDTO): Promise<void> {
    const accountExists = await this.accountRepository.findByDocument(
      account.document,
    );

    if (!accountExists) {
      throw new AppError('Account for credit does not exist!', 422);
    }

    account = accountExists;

    const movement = await this.movementRepository.create({
      account,
      value,
    });

    await this.movementRepository.save(movement);
  }
}
