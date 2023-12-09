import { UserRepository } from "../../domain/repository"
import { UserRepositoryImpl } from "../../infrastructure/data/repository"
import {sqliteDB} from "../config/sqlite-config"
import { userModelMapper } from "./mapper-model-container"

export const userRepository: UserRepository = new UserRepositoryImpl(userModelMapper, sqliteDB)
