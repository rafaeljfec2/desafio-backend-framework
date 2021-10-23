import { createShopkeeperController } from '@modules/usecases/CreateShopkeeper';
import { celebrate, Segments } from 'celebrate';
import { request, response, Router } from 'express';
import Joi from 'joi';

const shopkeeperRouter = Router();

/**
 * @api {post} /api/v1/shopkeepers Create Shopkeeper
 * @apiName Create Shopkeeper
 * @apiGroup Shopkeeper
 *
 * @apibody {object} [shopkeeper]
 * @apibody {string} [shopkeeper[name]]
 * @apibody {string} [shopkeeper[document]]
 * @apibody {string} [shopkeeper[email]]
 * @apibody {string} [shopkeeper[password]]
 *
 */

shopkeeperRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      shopkeeper: Joi.object().required(),
    },
  }),
  (request, response) => {
    return createShopkeeperController.handle(request, response);
  },
);

export default shopkeeperRouter;
