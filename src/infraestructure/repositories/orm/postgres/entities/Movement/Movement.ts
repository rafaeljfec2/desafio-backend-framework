import { IMovement } from '@modules/entities/Movement/IMovement';
import { IAccount } from '@modules/entities/Account/IAccount';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import Account from '../Account/Account';

@Entity('movement')
class Movement implements IMovement {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Account, account => account.movements)
  account: IAccount;

  @Column()
  value: number;

  @CreateDateColumn()
  created_at: Date;
}

export default Movement;
