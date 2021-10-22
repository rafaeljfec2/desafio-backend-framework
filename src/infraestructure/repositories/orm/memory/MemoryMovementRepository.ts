import { ICreateMovementDTO } from '@modules/entities/Movement/ICreateMovementDTO';
import { IMovement } from '@modules/entities/Movement/IMovement';
import { IMovementRepository } from '@modules/entities/Movement/IMovementRepository';
import { randomInt } from 'crypto';

export default class MemoryMovementRepository implements IMovementRepository {
  private movements: IMovement[] = [];

  public async balance(document: string): Promise<number> {
    let sum = 0;
    this.movements.forEach(movement => {
      if (movement.account.document === document) {
        sum += movement.value;
      }
    });
    return sum;
  }
  public async create({
    account,
    value,
  }: ICreateMovementDTO): Promise<IMovement> {
    const movement = {} as IMovement;

    movement.id = randomInt(5);
    movement.account = account;
    movement.value = value;
    movement.created_at = new Date();

    this.movements.push(movement);

    return movement;
  }
  public async save(movement: IMovement): Promise<IMovement> {
    this.movements.push(movement);
    return movement;
  }
}
