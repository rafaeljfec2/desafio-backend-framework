import { Request, Response } from 'express';
import { CreateUserUseCase } from '@modules/usecases/CreateUser/CreateUserUseCase';

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}
  public async handle(request: Request, response: Response): Promise<Response> {
    const { name, document, email, password } = request.body;

    await this.createUserUseCase.execute({ name, document, email, password });
    return response.status(201).json();
  }
}
