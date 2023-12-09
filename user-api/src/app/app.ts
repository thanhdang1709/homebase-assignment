import express, { Application } from "express"
import { userController } from "./di/controller-container"
import { controllerHandler, errorHandler } from "./middleware"

const app: Application = express()

// Support json request body
app.use(express.json())

app.post("/user", controllerHandler((req, res) => userController.create(req, res)))

app.get("/user", controllerHandler((req, res) => userController.find(req, res)))

app.get("/user/:id", controllerHandler((req, res) => userController.findOne(req, res)))

app.put("/user", controllerHandler((req, res) => userController.update(req, res)))

app.delete("/user/:id", controllerHandler((req, res) => userController.delete(req, res)))

app.get('*', (req, res) => {
  res.status(200).send('THIS IS USER API!');
});

app.use(errorHandler)

export default app