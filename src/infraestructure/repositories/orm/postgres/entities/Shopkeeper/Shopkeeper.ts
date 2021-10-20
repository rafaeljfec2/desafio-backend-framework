import { IShopkeeper } from '@modules/entities/Shopkeeper/IShopkeeper';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('user')
export default class Shopkeeper implements IShopkeeper {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  document: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  type: string;

  @CreateDateColumn()
  created_at: Date;

  //@OneToMany(() => Movement, movement => movement.account)
  //movements: Movement[];
}
