import loginRoute from '@infraestructure/http/routes/Login/LoginRoute';
import movementRouter from '@infraestructure/http/routes/Movement/MovementRoute';
import shopkeeperRouter from '@infraestructure/http/routes/Shopkeeper/ShopkeeperRoute';
import userRouter from '@infraestructure/http/routes/User/UserRouter';
import { Router } from 'express';

const routes = Router();

routes.use('/users', userRouter);
routes.use('/shopkeepers', shopkeeperRouter);
routes.use('/movements-account', movementRouter);
routes.use('/login', loginRoute);

export default routes;
