import { Request, Response, NextFunction } from "express";

const handleError = (err: any, req: Request, res: Response, next: Function) => {
  res.status(err.statusCode || 500).send({ message: err.message });
};

export default handleError;
