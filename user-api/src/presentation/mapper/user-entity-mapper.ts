import { Request } from "express";
import { CreateUserDto, UpdateUserDto, UserDto } from "../dto"
import {
  plainToInstance,
} from "class-transformer"
import {
  CreateUserEntity,
  UpdateUserEntity,
  UserEntity,
} from "../../domain/entity"

export class UserEntityMapper {
  fromCreateRequest(source: Request): CreateUserEntity {
    const createUserDto = plainToInstance(CreateUserDto, source.body, {
      excludeExtraneousValues: true,
    })

    return plainToInstance(CreateUserEntity, createUserDto, {
      excludeExtraneousValues: true,
    })
  }

  toCreateResponse(source: UserEntity): UserDto {
    return plainToInstance(UserDto, source, {
      excludeExtraneousValues: true,
    })
  }

  toFindResponse(source: UserEntity[]): UserDto[] {
    return plainToInstance(UserDto, source, {
      excludeExtraneousValues: true,
    })
  }

  fromUpdateRequest(source: Request): UpdateUserEntity {
    const updateUserDto = plainToInstance(UpdateUserDto, source.body, {
      excludeExtraneousValues: true,
    })
    
    return plainToInstance(UpdateUserEntity, updateUserDto, {
      excludeExtraneousValues: true,
    })
  }
}
