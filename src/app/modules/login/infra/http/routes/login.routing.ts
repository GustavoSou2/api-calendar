import bodyParser from "body-parser";
import { celebrate, Segments } from "celebrate";
import { Router } from "express";
import LoginController from "../controller/LoginController";

const loginRoutes = Router();
loginRoutes.use(bodyParser.json());     

loginRoutes.post('/', LoginController.validateCredentials)

export default loginRoutes;