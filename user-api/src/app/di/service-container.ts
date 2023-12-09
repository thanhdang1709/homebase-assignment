import {userRepository} from "./repository-container"
import {UserService, UserServiceImpl} from "../../domain/service"

export const userService : UserService = new UserServiceImpl(userRepository)