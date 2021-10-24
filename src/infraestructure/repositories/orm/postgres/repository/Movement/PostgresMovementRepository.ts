import { ICreateMovementDTO } from '@entities/Movement/ICreateMovementDTO';
import { IMovement } from '@entities/Movement/IMovement';
import { IMovementRepository } from '@entities/Movement/IMovementRepository';
import { getRepository, Repository } from 'typeorm';

import Movement from '../../entities/Movement/Movement';

export default class PostgresMovementRepository implements IMovementRepository {
  private ormRepository: Repository<Movement>;

  public async create({
    account,
    value,
  }: ICreateMovementDTO): Promise<IMovement> {
    this.ormRepository = getRepository(Movement);
    const movement = this.ormRepository.create({
      account,
      value,
    });

    return movement;
  }
  public async save(movement: IMovement): Promise<IMovement> {
    this.ormRepository = getRepository(Movement);
    await this.ormRepository.save(movement);
    return movement;
  }

  public async balance(document: string): Promise<number> {
    const { sum } = await getRepository(Movement)
      .createQueryBuilder('movement')
      .select('SUM(movement.value)', 'sum')
      .innerJoin('movement.account', 'account')
      .where('account.document = :document', { document: String(document) })
      .getRawOne();

    return sum;
  }
}
