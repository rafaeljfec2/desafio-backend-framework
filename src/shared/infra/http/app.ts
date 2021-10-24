import 'reflect-metadata';
import express, {
  Application,
  NextFunction,
  Request,
  RequestHandler,
  Response,
} from 'express';
import 'express-async-errors';
import cors from 'cors';
import { errors } from 'celebrate';
import AppError from '@shared/errors/AppError';
import '@shared/infra/typeorm';
import routes from './routes';
import morgan from 'morgan-body';
import logger from '@infraestructure/middlewares/logger';
import { createNamespace, Namespace } from 'continuation-local-storage';

class App {
  public readonly app: Application;
  private readonly session: Namespace;

  constructor() {
    this.app = express();
    this.session = createNamespace('request');
    this.middlewares();
    this.routes();
    this.errorHandle();
  }

  private middlewares(): void {
    this.app.use(cors());
    this.app.use(express.json());
    const reqId = require('express-request-id');
    this.app.use(reqId());
    this.app.use(errors());

    const attachContext: RequestHandler = (
      _: Request,
      __: Response,
      next: NextFunction,
    ) => {
      this.session.run(() => next());
    };

    const setRequestId: RequestHandler = (
      request: Request,
      _: Response,
      next: NextFunction,
    ) => {
      this.session.set('id', request.id);
      next();
    };

    this.app.use(attachContext, setRequestId);
    morgan(this.app, {
      noColors: true,
      prettify: false,
      logReqUserAgent: false,
      stream: {
        write: (msg: string) => logger.info(msg) as any,
      },
    });
  }

  private errorHandle(): void {
    this.app.use(
      (
        error: Error,
        request: Request,
        response: Response,
        next: NextFunction,
      ) => {
        if (error instanceof AppError) {
          return response.status(error.statusCode).json({
            status: 'error',
            message: error.message,
          });
        }

        return response.status(500).json({
          status: 'error',
          message: error.message,
        });
      },
    );
  }

  private routes(): void {
    this.app.use('/api/v1', routes);
    this.app.use('/api-docs', express.static('./docs'));
  }
}

export default new App();
