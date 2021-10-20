import { IUsersRepository } from '@modules/infraestructure/repositories/orm/postgres/entities/IUsersRepository';
import { ICreateUserDTO } from './ICreateUserDTO';

export class CreateUserUseCase {
  constructor(private UserRepository: IUsersRepository) {}

  public async execute({
    name,
    document,
    email,
    password,
  }: ICreateUserDTO): Promise<void> {
    const user = await this.UserRepository.create({
      name,
      document,
      email,
      password,
    });

    await this.UserRepository.save(user);
  }
}
