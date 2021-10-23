import { IAuthToken } from '@modules/entities/Auth/IAuthToken';
import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export default class AuthToken implements IAuthToken {
  public async verifyToken(
    request: Request,
    response: Response,
    next: NextFunction,
  ): Promise<any> {
    const token = request.headers['x-access-token'];

    if (!token) {
      return response
        .status(401)
        .json({ auth: false, message: 'No token provided.' });
    }

    jwt.verify(String(token), String(process.env.SECRET), (err, decoded) => {
      if (err) {
        return response
          .status(500)
          .json({ auth: false, message: 'Failed to authenticate token.' });
      }
      next();
    });
  }
}
