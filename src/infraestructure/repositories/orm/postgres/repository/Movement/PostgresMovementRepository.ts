import { IMovement } from '@modules/entities/Movement/IMovement';
import { ICreateCreditAccountDTO } from '@modules/usecases/CreateCreditAccount/ICreateCreditAccountDTO';
import { getRepository, Repository } from 'typeorm';
import { IMovementRepository } from '../../entities/Movement/IMovementRepository';
import Movement from '../../entities/Movement/Movement';

export default class PostgresMovementRepository implements IMovementRepository {
  private ormRepository: Repository<Movement>;

  public async create({
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
