import { Expose, Transform } from "class-transformer"
import { IsEmail, IsUUID, Length, Matches } from "class-validator"
import { BadRequestException } from "../exception"
import { ERROR_MESSAGE_CONSTANT } from "../constant"
import { BaseEntity } from "./base-entity"

export class UpdateUserEntity extends BaseEntity {
  @Expose()
  @IsUUID(undefined, {
    context: new BadRequestException(
      ERROR_MESSAGE_CONSTANT.userIdInvalid.code,
      ERROR_MESSAGE_CONSTANT.userIdInvalid.message
    ),
  })
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

  readonly modifiedAt: Date = new Date()
}
