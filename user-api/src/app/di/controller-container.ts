import { UserController } from "../../presentation/controller"
import { userEntityMapper } from "./mapper-entity-container"
import {userService} from "./service-container"

export const userController = new UserController(userEntityMapper, userService)
