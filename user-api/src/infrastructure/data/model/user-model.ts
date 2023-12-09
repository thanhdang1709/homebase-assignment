import { Expose, Transform } from "class-transformer";

export class UserModel {
  @Expose()
  readonly id: string;

  @Expose()
  readonly fullName: string;

  @Expose()
  readonly email: string;

  @Expose()
  @Transform(
    ({ value }) => {
      if (!value) {
        return null;
      }

      return new Date(value);
    },
    { toClassOnly: true }
  )
  readonly createdAt?: Date | null;

  @Expose()
  @Transform(
    ({ value }) => {
      if (!value) {
        return null;
      }

      return new Date(value);
    },
    { toClassOnly: true }
  )
  readonly modifiedAt?: Date | null;
}
