import { createUserController } from '@modules/usecases/CreateUser';
import { request, response, Router } from 'express';

const userRouter = Router();

userRouter.post('/', (request, response) => {
  return createUserController.handle(request, response);
});

export default userRouter;
