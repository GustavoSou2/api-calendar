import { NextFunction, Request, Response } from "express";
import LoginService from "../../services/LoginService";

class LoginController {
    constructor() {}

    async validateCredentials(req: Request, res: Response, next: NextFunction) {
        try {
            const { validateCredentials } = LoginService;
            const data = req.body

            res.status(201).json(await validateCredentials(data))
        }
        catch(err) {
            next(err)
        }
    }
}

export default new LoginController();