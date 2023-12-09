import { CreateUserEntity, UpdateUserEntity, UserEntity } from "../entity";

export interface UserService {
  create(entity: CreateUserEntity): Promise<UserEntity>;

  findOne(id: string): Promise<UserEntity>;

  find(): Promise<UserEntity[]>;

  update(entity: UpdateUserEntity): Promise<void>;

  delete(id: string): Promise<void>;
}
