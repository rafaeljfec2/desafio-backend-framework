import { createCreditAccounController } from '@modules/usecases/CreateCreditAccount';
import { request, response, Router } from 'express';

const movementRouter = Router();

movementRouter.post('/', (request, response) => {
  return createCreditAccounController.handle(request, response);
});

export default movementRouter;
