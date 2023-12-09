import { BaseException } from './base-exception';
import { StatusCodes } from "http-status-codes";

export class BadRequestException extends BaseException {
  constructor(
    readonly errorCode: number,
    readonly errorMessage: string,
  ) {
    super(StatusCodes.BAD_REQUEST, errorCode, errorMessage);
  }
}
