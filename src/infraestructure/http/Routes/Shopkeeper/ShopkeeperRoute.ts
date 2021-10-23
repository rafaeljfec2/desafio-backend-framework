import { createShopkeeperController } from '@modules/usecases/CreateShopkeeper';
import { celebrate, Segments } from 'celebrate';
import { request, response, Router } from 'express';
import Joi from 'joi';

const shopkeeperRouter = Router();

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
