import { createUserController } from '@modules/usecases/CreateUser';
import { celebrate, Segments } from 'celebrate';
import { request, response, Router } from 'express';
import Joi from 'joi';

const userRouter = Router();

userRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      user: Joi.object().required(),
    },
  }),
  (request, response) => {
    return createUserController.handle(request, response);
  },
);

export default userRouter;
