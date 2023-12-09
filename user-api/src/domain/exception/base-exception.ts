export class BaseException extends Error {
  constructor(
    readonly statusCode: number,
    readonly errorCode: number,
    readonly errorMessage: string,
  ) {
    super(errorMessage);
  }
}
