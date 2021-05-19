import jsonwebtoken from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

export const authToken = (req: Request, res: Response, next: NextFunction) => {
  try {
    const authorizationHeader = req.headers.authorization
    const token = authorizationHeader!.split(' ')[1]
    const decode = jsonwebtoken.verify(token, process.env.TOKEN_SECRET!)
    console.log(decode);
    
    next();
  } catch (err) {
    err.code = 401;
    next(err);
  }
};