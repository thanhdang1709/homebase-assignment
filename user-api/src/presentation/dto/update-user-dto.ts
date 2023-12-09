import { Expose } from "class-transformer";

export class UpdateUserDto {
  @Expose()
  readonly id: string;

  @Expose()
  readonly fullName: string;

  @Expose()
  readonly email: string;
}
