import { Response, Request, NextFunction } from "express"
import { StatusCodes } from "http-status-codes"
import { BaseException } from "../../domain/exception";
import { ERROR_MESSAGE_CONSTANT } from "../../domain/constant";

export const errorHandler = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    console.log(`RESPONSE ERROR = ${err}`)

    if (err instanceof BaseException) {
      res.status(err.statusCode).json({
        errorCode: err.errorCode,
        errorMessage: err.errorMessage
      })

      return
    }
  
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errorCode: ERROR_MESSAGE_CONSTANT.undefine.code,
      errorMessage: ERROR_MESSAGE_CONSTANT.undefine.message
      })
  };
  