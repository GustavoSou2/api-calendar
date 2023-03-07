import bodyParser from "body-parser";
import { celebrate, Segments } from "celebrate";
import { Router } from "express";
import createUserSchema from "../../../schemas/create-user.schema";
import UserController from "../controller/UserController";

const userRoutes = Router();
userRoutes.use(bodyParser.json());     

userRoutes.get('/', UserController.list)
userRoutes.post(
    '/', 
    celebrate({ [Segments.BODY]: createUserSchema }),
    UserController.create
    )

export default userRoutes;