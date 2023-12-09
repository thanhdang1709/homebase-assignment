import { instanceToPlain } from "class-transformer";
import { Response, Request, NextFunction } from "express"
import { StatusCodes } from "http-status-codes"

export const controllerHandler =
  (fn: (req: Request, res: Response) => Promise<any>) =>
  (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res))
      .then((data) => {
        res.status(StatusCodes.OK).json(data)
      })
      .catch((error) => {
        next(error);
      });
  };
