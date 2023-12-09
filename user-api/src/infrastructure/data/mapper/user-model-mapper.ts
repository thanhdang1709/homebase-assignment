import { plainToInstance } from "class-transformer";
import { CreateUserEntity, UpdateUserEntity, UserEntity } from "../../../domain/entity";
import { UserModel } from "../model";

export class UserModelMapper {
  fromCreateRequest(source: CreateUserEntity): UserModel {
    return plainToInstance(UserModel, source, {
      excludeExtraneousValues: true,
    })
  }

  toCreateResponse(source: UserModel): UserEntity {
    return plainToInstance(UserEntity, source, {
      excludeExtraneousValues: true,
    })
  }

  toFindResponse(source: UserModel[]): UserEntity[] {
    return plainToInstance(UserEntity, source, {
      excludeExtraneousValues: true,
    })
  }
}
