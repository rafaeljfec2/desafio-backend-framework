import movementRouter from '@modules/infraestructure/http/MovementRoute';
import shopkeeperRouter from '@modules/infraestructure/http/ShopkeeperRoute';
import userRouter from '@modules/infraestructure/http/UserRouter';
import { Router } from 'express';

const routes = Router();

routes.use('/users', userRouter);
routes.use('/shopkeepers', shopkeeperRouter);
routes.use('/movements-account/credit', movementRouter);

export default routes;
