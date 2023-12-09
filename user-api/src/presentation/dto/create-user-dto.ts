import { Expose } from "class-transformer";

export class CreateUserDto {
  @Expose()
  readonly fullName: string

  @Expose()
  readonly email: string
}
