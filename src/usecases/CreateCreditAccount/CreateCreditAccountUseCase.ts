import { IMovementRepository } from '@modules/infraestructure/repositories/orm/postgres/entities/Movement/IMovementRepository';
import { IUsersRepository } from '@modules/infraestructure/repositories/orm/postgres/entities/User/IUsersRepository';
import AppError from '@modules/shared/errors/AppError';
import { ICreateCreditAccountDTO } from './ICreateCreditAccountDTO';

export default class CreateCreditAccountUseCase {
  constructor(
    private movementRepository: IMovementRepository,
    private userRepository: IUsersRepository,
  ) {}

  public async execute({
    user,
    value,
  }: ICreateCreditAccountDTO): Promise<void> {
    const userExists = await this.userRepository.findByDocument(user.document);

    if (!userExists) {
      throw new AppError('Account for credit does not exist!', 422);
    }

    user = userExists;

    const movement = await this.movementRepository.create({
      user,
      value,
    });

    await this.movementRepository.save(movement);
  }
}
