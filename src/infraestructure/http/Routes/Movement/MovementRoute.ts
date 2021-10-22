import { balanceAccountController } from '@modules/usecases/BalanceAccount';
import { createCreditAccounController } from '@modules/usecases/CreateCreditAccount';
import { createTransferAccountController } from '@modules/usecases/CreateTransferAccount';
import { request, response, Router } from 'express';

const movementRouter = Router();

movementRouter.post('/credit', (request, response) => {
  return createCreditAccounController.handle(request, response);
});

movementRouter.post('/transfer', (request, response) => {
  return createTransferAccountController.handle(request, response);
});

movementRouter.get('/balance/:document', (request, response) => {
  return balanceAccountController.handle(request, response);
});

export default movementRouter;
