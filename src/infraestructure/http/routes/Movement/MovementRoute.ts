import { authToken } from '@usecases/AuthToken';
import { balanceAccountController } from '@usecases/BalanceAccount';
import { createCreditAccounController } from '@usecases/CreateCreditAccount';
import { createTransferAccountController } from '@usecases/CreateTransferAccount';
import { celebrate, Segments } from 'celebrate';
import { request, response, Router } from 'express';
import Joi from 'joi';

const movementRouter = Router();

/**
 * @api {post} /api/v1/movements-account/credit Account Credit
 * @apiName Credit an amount to the account
 * @apiGroup Movement
 *
 * @apiHeader {String} x-access-token Token received from endpoint login
 *
 * @apibody {object} [account]
 * @apibody {string} [account[document]]
 * @apibody {Number} [value]
 *
 * @apiSuccess {object} object object of movement credit
 */

movementRouter.post(
  '/credit',
  authToken.verifyToken,
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

/**
 * @api {post} /api/v1/movements-account/transfer Account Transfer
 * @apiName Transfer of amounts between accounts
 * @apiGroup Movement
 *
 * @apiHeader {String} x-access-token Token received from endpoint login
 *
 * @apibody {object} [accountPayer]
 * @apibody {string} [accountPayer[document]]
 * @apibody {object} [accountPayee]
 * @apibody {string} [accountPayee[document]]
 * @apibody {Number} [value]
 *
 * @apiSuccess {String} Account Account origin of debit
 * @apiSuccess {Number} Balance Remaining balance after transfer
 */

movementRouter.post(
  '/transfer',
  authToken.verifyToken,
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

/**
 * @api {get} /api/v1/movements-account/balance/:document Account Balance
 * @apiName Balance of account
 * @apiGroup Movement
 *
 * @apiHeader {String} x-access-token Token received from endpoint login
 *
 * @apiparam {string} [document]

 * @apiSuccess {String} Account Account
 * @apiSuccess {Number} Balance Balance
 */

movementRouter.get(
  '/balance/:document',
  authToken.verifyToken,
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
