import { IMovement } from '@modules/entities/Movement/IMovement';
import { ICreateCreditAccountDTO } from '@modules/usecases/CreateCreditAccount/ICreateCreditAccountDTO';
import { getRepository, Repository } from 'typeorm';
import { IMovementRepository } from '../../entities/Movement/IMovementRepository';
import Movement from '../../entities/Movement/Movement';

export default class PostgresMovementRepository implements IMovementRepository {
  private ormRepository: Repository<Movement>;

  async create({
    account,
    value,
  }: ICreateCreditAccountDTO): Promise<IMovement> {
    this.ormRepository = getRepository(Movement);
    const movement = this.ormRepository.create({
      account,
      value,
    });

    await this.ormRepository.save(movement);

    return movement;
  }
  async save(movement: IMovement): Promise<IMovement> {
    this.ormRepository = getRepository(Movement);
    await this.ormRepository.save(movement);
    return movement;
  }
}
