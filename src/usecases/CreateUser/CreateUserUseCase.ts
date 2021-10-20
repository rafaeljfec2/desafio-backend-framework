import { IUsersRepository } from '@modules/repositories/IUsersRepository';
import { ICreateUserDTO } from './ICreateUserDTO';

export class CreateUserUseCase {
  constructor(private UserRepository: IUsersRepository) {}

  async execute({
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
