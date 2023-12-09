import { Expose, Transform } from "class-transformer"
import { IsEmail, Length, Matches } from "class-validator"
import { v4 as uuidv4 } from "uuid";
import { BadRequestException } from "../exception"
import { ERROR_MESSAGE_CONSTANT } from "../constant"
import { BaseEntity } from "./base-entity"

export class CreateUserEntity extends BaseEntity {
  @Expose()
  @Transform(({ value }) => value ?? uuidv4(), { toClassOnly: true })
  readonly id: string

  @Expose()
  @Matches(/^[a-zA-Z\d\-_.,\s]+$/, {
    context: new BadRequestException(
      ERROR_MESSAGE_CONSTANT.userFullNameInvalid.code,
      ERROR_MESSAGE_CONSTANT.userFullNameInvalid.message
    ),
  })
  @Length(3, 40, {
    context: new BadRequestException(
      ERROR_MESSAGE_CONSTANT.userFullNameInvalid.code,
      ERROR_MESSAGE_CONSTANT.userFullNameInvalid.message
    ),
  })
  readonly fullName: string

  @Expose()
  @IsEmail(undefined, {
    context: new BadRequestException(
      ERROR_MESSAGE_CONSTANT.userEmailInvalid.code,
      ERROR_MESSAGE_CONSTANT.userEmailInvalid.message
    ),
  })
  readonly email: string

  readonly createdAt: Date = new Date()
}
