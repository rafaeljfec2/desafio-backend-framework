import { IMovement } from '@modules/entities/Movement/IMovement';
import { ICreateCreditAccountDTO } from '@modules/usecases/CreateCreditAccount/ICreateCreditAccountDTO';

export interface IMovementRepository {
  create(data: ICreateCreditAccountDTO): Promise<IMovement>;
  save(movement: IMovement): Promise<IMovement>;
  balance(document: string): Promise<number>;
}
