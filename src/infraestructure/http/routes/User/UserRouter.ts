import { createUserController } from '@usecases/CreateUser';
import { celebrate, Segments } from 'celebrate';
import { request, response, Router } from 'express';
import Joi from 'joi';

const userRouter = Router();

/**
 * @api {post} /api/v1/users Create User
 * @apiName Create User
 * @apiGroup User
 *
 * @apibody {object} [user]
 * @apibody {string} [user[name]]
 * @apibody {string} [user[document]]
 * @apibody {string} [user[email]]
 * @apibody {string} [user[password]]
 *
 */

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
