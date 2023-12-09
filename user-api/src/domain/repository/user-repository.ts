import { CreateUserEntity, UpdateUserEntity, UserEntity } from "../entity";

export interface UserRepository {
  create(entity: CreateUserEntity): Promise<UserEntity>

  findOne(id: string): Promise<UserEntity | null>

  find(): Promise<UserEntity[]>

  update(entity: UpdateUserEntity): Promise<void>

  delete(id: string): Promise<void>
}
