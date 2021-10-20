import { IUsersRepository } from '@modules/infraestructure/repositories/orm/postgres/entities/IUsersRepository';
import { ICreateUserDTO } from '@modules/usecases/CreateUser/ICreateUserDTO';
import { getRepository, Repository } from 'typeorm';
import User from '../entities/User';

export default class PostgresUserRepository implements IUsersRepository {
  private ormRepository: Repository<User>;

  public async create({
    name,
    document,
    email,
    password,
    type,
  }: ICreateUserDTO): Promise<User> {
    this.ormRepository = getRepository(User);
    const user = this.ormRepository.create({
      name,
      document,
      email,
      type,
      password,
    });
    await this.ormRepository.save(user);
    return user;
  }

  public async save(user: User): Promise<User> {
    this.ormRepository = getRepository(User);
    await this.ormRepository.save(user);
    return user;
  }

  public async findByCpf(cpf: string): Promise<User | undefined> {
    this.ormRepository = getRepository(User);
    const user = this.ormRepository.findOne({
      where: {
        cpf,
      },
    });
    return user;
  }

  public async findById(id: number): Promise<User | undefined> {
    this.ormRepository = getRepository(User);
    const user = this.ormRepository.findOne({
      where: {
        id,
      },
    });
    return user;
  }
}
