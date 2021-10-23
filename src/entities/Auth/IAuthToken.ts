import { NextFunction, Request, Response } from 'express';

export interface IAuthToken {
  verifyToken(
    request: Request,
    response: Response,
    next: NextFunction,
  ): Promise<any>;
}
