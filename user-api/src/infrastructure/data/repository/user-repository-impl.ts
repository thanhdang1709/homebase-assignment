import { plainToInstance } from "class-transformer";
import {
  CreateUserEntity,
  UpdateUserEntity,
  UserEntity,
} from "../../../domain/entity";
import { UserRepository } from "../../../domain/repository";
import { UserModelMapper } from "../mapper";
import { UserModel } from "../model";
import { Database } from "sqlite3";

export class UserRepositoryImpl implements UserRepository {
  constructor(
    private readonly userModelMapper: UserModelMapper,
    private readonly sqliteDB: Database
  ) {}

  async create(entity: CreateUserEntity): Promise<UserEntity> {
    const userModel = this.userModelMapper.fromCreateRequest(entity);

    await new Promise((resolve, reject) => {
      this.sqliteDB.run(
        "INSERT INTO USERS(id,fullName,email,createdAt,modifiedAt) VALUES(?,?,?,?,?)",
        [
          userModel.id,
          userModel.fullName,
          userModel.email,
          userModel.createdAt,
          null,
        ],
        (err) => {
          if (err) {
            reject(err);
          } else {
            resolve(true);
          }
        }
      );
    });

    return this.userModelMapper.toCreateResponse(userModel);
  }

  async findOne(id: string): Promise<UserEntity | null> {
    var result = await new Promise((resolve, reject) => {
      this.sqliteDB.get(
        `SELECT * FROM USERS WHERE id = ?`,
        [id],
        (err, row) => {
          if (err) {
            reject(err);
          } else {
            resolve(row);
          }
        }
      );
    });

    if (!result) {
      return null;
    }

    const userModel = plainToInstance(UserModel, result);

    return this.userModelMapper.toCreateResponse(userModel);
  }

  async find(): Promise<UserEntity[]> {
    var result = await new Promise<unknown[]>((resolve, reject) => {
      this.sqliteDB.all(`SELECT * FROM USERS`, (err, row) => {
        if (err) {
          reject(err);
        } else {
          resolve(row);
        }
      });
    });

    const userModel = plainToInstance(UserModel, result);

    return this.userModelMapper.toFindResponse(userModel);
  }

  async update(entity: UpdateUserEntity): Promise<void> {
    await new Promise((resolve, reject) => {
      this.sqliteDB.run(
        "UPDATE USERS SET fullName = ?, email = ?, modifiedAt = ? WHERE id = ?",
        [entity.fullName, entity.email, entity.modifiedAt, entity.id],
        (err) => {
          if (err) {
            reject(err);
          } else {
            resolve(true);
          }
        }
      );
    });
  }

  async delete(id: string): Promise<void> {
    await new Promise((resolve, reject) => {
      this.sqliteDB.run("DELETE FROM USERS WHERE id = ?", [id], (err) => {
        if (err) {
          reject(err);
        } else {
          resolve(true);
        }
      });
    });
  }
}
