import userRouter from '@modules/infraestructure/http/UserRouter';
import { Router } from 'express';

const routes = Router();

routes.use('/users', userRouter);

export default routes;
