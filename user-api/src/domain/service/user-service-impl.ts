import { ERROR_MESSAGE_CONSTANT } from "../constant";
import { CreateUserEntity, UpdateUserEntity, UserEntity } from "../entity";
import { NotFoundException } from "../exception";
import { UserRepository } from "../repository";
import { UserService } from "./user-service";

export class UserServiceImpl implements UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async create(entity: CreateUserEntity): Promise<UserEntity> {
    entity.validateAndThrow();

    return this.userRepository.create(entity);
  }

  async findOne(id: string): Promise<UserEntity> {
    const result = await this.userRepository.findOne(id);

    if (!result) {
      throw new NotFoundException(
        ERROR_MESSAGE_CONSTANT.noUserFound.code,
        ERROR_MESSAGE_CONSTANT.noUserFound.message
      );
    }

    return result;
  }

  async find(): Promise<UserEntity[]> {
    return this.userRepository.find();
  }

  async update(entity: UpdateUserEntity): Promise<void> {
    entity.validateAndThrow();

    return this.userRepository.update(entity);
  }

  async delete(id: string): Promise<void> {
    return this.userRepository.delete(id);
  }
}
