import { createShopkeeperController } from '@modules/usecases/CreateShopkeeper';
import { request, response, Router } from 'express';

const shopkeeperRouter = Router();

shopkeeperRouter.post('/', (request, response) => {
  return createShopkeeperController.handle(request, response);
});

export default shopkeeperRouter;
