import logger from '@infraestructure/middlewares/logger';
import { loginUseCaseController } from '@usecases/Login';
import { celebrate, Segments } from 'celebrate';
import { request, response, Router } from 'express';
import Joi from 'joi';

const loginRoute = Router();

/**
 * @api {post} /api/v1/login Login Account
 * @apiName Login
 * @apiGroup Account
 *
 * @apibody {string} [email]
 * @apibody {string} [password]
 *
 * @apiSuccess {object} object Return Token of access
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
    logger.info(`Request recebida`);
    return loginUseCaseController.handle(request, response);
  },
);

export default loginRoute;
