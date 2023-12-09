import { BaseException } from './base-exception';
import { StatusCodes } from "http-status-codes";

export class NotFoundException extends BaseException {
  constructor(
    readonly errorCode: number,
    readonly errorMessage: string,
  ) {
    super(StatusCodes.NOT_FOUND, errorCode, errorMessage);
  }
}
