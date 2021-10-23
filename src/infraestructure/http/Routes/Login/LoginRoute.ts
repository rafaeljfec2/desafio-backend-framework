import { loginUseCaseController } from '@modules/usecases/Login';
import { celebrate, Segments } from 'celebrate';
import { request, response, Router } from 'express';
import Joi from 'joi';

const loginRoute = Router();

/**
 * @api {post} /api/v1/movements-account/credit Account Credit
 * @apiName Credit an amount to the account
 * @apiGroup Movement
 *
 * @apibody {object} [account]
 * @apibody {string} [account[document]]
 * @apibody {Number} [value]
 *
 * @apiSuccess {object} object object of movement credit
 */

loginRoute.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().required(),
      password: Joi.string().required(),
    },
  }),
  (request, response) => {
    return loginUseCaseController.handle(request, response);
  },
);

export default loginRoute;
