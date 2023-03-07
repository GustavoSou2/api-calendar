import { NextFunction, Request, Response } from "express";
import { container } from "tsyringe";
import { ResponseSnapShotQuery } from "../../../../../../shared/infra/helpers/Response/response";
import IUserDTO from "../../../dtos/IUserDTO";
import UserService from "../../services/UserService";

class UserController {
    constructor() {}

    async list(req: Request, res: Response, next: NextFunction) {
        try {
            const { list } = UserService;
            res.header('Access-Control-Allow-Origin', '*')
            res.header(
            'Access-Control-Allow-Headers',
            'Origin, X-Requested-With, Content-Type, Accept'
            );
            
            await list().then(ResponseSnapShotQuery).then((data) => {
            res.status(201).json(data)
            })
        }
        catch(err) {
            next(err)
        }
    }

    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const body = req.body;
            const { create } = UserService;

            res.header('Access-Control-Allow-Origin', '*')
            res.header(
            'Access-Control-Allow-Headers',
            'Origin, X-Requested-With, Content-Type, Accept'
            );
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
            
            await create(body as IUserDTO).then(ResponseSnapShotQuery).then((data) => {
                res.status(201).json(data)
            })

        }
        catch(err) {
            next(err)
        }
    }
}

export default new UserController();