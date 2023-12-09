import { Expose } from "class-transformer"

export class UserEntity {
  @Expose()
  readonly id: string

  @Expose()
  readonly fullName: string

  @Expose()
  readonly email: string

  @Expose()
  readonly createdAt: Date

  @Expose()
  readonly modifiedAt: Date
}
