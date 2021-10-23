import { balanceAccountController } from '@modules/usecases/BalanceAccount';
import { createCreditAccounController } from '@modules/usecases/CreateCreditAccount';
import { createTransferAccountController } from '@modules/usecases/CreateTransferAccount';
import { celebrate, Segments } from 'celebrate';
import { request, response, Router } from 'express';
import Joi from 'joi';

const movementRouter = Router();

movementRouter.post(
  '/credit',
  celebrate({
    [Segments.BODY]: {
      account: Joi.object().required(),
      value: Joi.number().required(),
    },
  }),
  (request, response) => {
    return createCreditAccounController.handle(request, response);
  },
);

movementRouter.post(
  '/transfer',
  celebrate({
    [Segments.BODY]: {
      accountPayer: Joi.object().required(),
      accountPayee: Joi.object().required(),
      value: Joi.number().required(),
    },
  }),
  (request, response) => {
    return createTransferAccountController.handle(request, response);
  },
);

movementRouter.get(
  '/balance/:document',
  celebrate({
    [Segments.PARAMS]: {
      document: Joi.string().required(),
    },
  }),
  (request, response) => {
    return balanceAccountController.handle(request, response);
  },
);

export default movementRouter;
