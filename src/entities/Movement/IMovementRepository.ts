import { IMovement } from '@entities/Movement/IMovement';
import { ICreateMovementDTO } from './ICreateMovementDTO';

export interface IMovementRepository {
  create(data: ICreateMovementDTO): Promise<IMovement>;
  save(movement: IMovement): Promise<IMovement>;
  balance(document: string): Promise<number>;
}
