import loginRoute from '@modules/infraestructure/http/routes/Login/LoginRoute';
import movementRouter from '@modules/infraestructure/http/routes/Movement/MovementRoute';
import shopkeeperRouter from '@modules/infraestructure/http/routes/Shopkeeper/ShopkeeperRoute';
import userRouter from '@modules/infraestructure/http/routes/User/UserRouter';
import { Router } from 'express';

const routes = Router();

routes.use('/users', userRouter);
routes.use('/shopkeepers', shopkeeperRouter);
routes.use('/movements-account', movementRouter);
routes.use('/login', loginRoute);

export default routes;
