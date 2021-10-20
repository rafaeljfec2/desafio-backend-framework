import { IUsersRepository } from '@modules/repositories/IUsersRepository';
import { ICreateUserDTO } from '@modules/usecases/CreateUser/ICreateUserDTO';
import { getRepository, Repository } from 'typeorm';
import User from '../entities/User';

export default class UserRepository implements IUsersRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  public async create({
    name,
    document,
    email,
    password,
  }: ICreateUserDTO): Promise<User> {
    const user = this.ormRepository.create({
      name,
      document,
      email,
      password,
    });
    await this.ormRepository.save(user);
    return user;
  }

  public async save(user: User): Promise<User> {
    await this.ormRepository.save(user);
    return user;
  }

  public async findByCpf(cpf: string): Promise<User | undefined> {
    const user = this.ormRepository.findOne({
      where: {
        cpf,
      },
    });
    return user;
  }

  public async findById(id: number): Promise<User | undefined> {
    const user = this.ormRepository.findOne({
      where: {
        id,
      },
    });
    return user;
  }
}
