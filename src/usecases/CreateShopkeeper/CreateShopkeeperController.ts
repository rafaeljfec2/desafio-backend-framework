import { UserType } from '@shared/enum/UserType';
import { Request, Response } from 'express';
import { CreateShopkeeperUseCase } from './CreateShopkeeperUserCase';

export class CreateShopkeeperController {
  constructor(private createShopkeeperUseCase: CreateShopkeeperUseCase) {}

  public async handle(request: Request, response: Response): Promise<Response> {
    const { name, document, email, password } = request.body.shopkeeper;
    const type = UserType.SHOPKEEPER;

    await this.createShopkeeperUseCase.execute({
      name,
      document,
      email,
      password,
      type,
    });

    return response.status(201).json();
  }
}
