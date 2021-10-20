import { IUsersRepository } from '@modules/infraestructure/repositories/orm/postgres/entities/User/IUsersRepository';
import { ICreateUserDTO } from './ICreateUserDTO';

export class CreateUserUseCase {
  constructor(private userRepository: IUsersRepository) {}

  public async execute({
    name,
    document,
    email,
    password,
    type,
  }: ICreateUserDTO): Promise<void> {
    const user = await this.userRepository.create({
      name,
      document,
      email,
      password,
      type,
    });

    await this.userRepository.save(user);
  }
}
