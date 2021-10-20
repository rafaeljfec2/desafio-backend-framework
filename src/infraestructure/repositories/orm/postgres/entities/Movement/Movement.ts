import { IMovement } from '@modules/entities/Movement/IMovement';
import { IUser } from '@modules/entities/User/IUser';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import User from '../User/User';

@Entity('movement')
class Movement implements IMovement {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, user => user.movements)
  user: IUser;

  @Column()
  value: number;

  @CreateDateColumn()
  created_at: Date;
}

export default Movement;
