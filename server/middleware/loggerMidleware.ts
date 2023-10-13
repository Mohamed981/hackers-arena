import { RequestHandler } from "express";

export const requestLoggerMiddleware: RequestHandler = (req, res, next) => {
    console.log('New request:', req.method, '- body:', req.body);
    next();
  };