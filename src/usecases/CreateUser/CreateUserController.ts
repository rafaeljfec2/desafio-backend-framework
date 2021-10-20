import { Request, Response } from 'express';
import { CreateUserUseCase } from '@modules/usecases/CreateUser/CreateUserUseCase';
import { UserType } from '@modules/shared/enum/UserType';

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}
  public async handle(request: Request, response: Response): Promise<Response> {
    const { name, document, email, password } = request.body.user;
    const type = UserType.USER;

    await this.createUserUseCase.execute({
      name,
      document,
      email,
      password,
      type,
    });
    return response.status(201).json();
  }
}
