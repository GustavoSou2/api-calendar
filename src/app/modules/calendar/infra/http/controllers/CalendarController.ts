import { NextFunction, Request, Response } from "express";
import { container } from "tsyringe";
import ICalendarDTO from "../../../dtos/ICalendarDTO";
import CalendarService from "../../services/CalendarService";

class CalendarController {
    constructor() {}

    async list(req: Request, res: Response, next: NextFunction) {
        try {
            const { list } = CalendarService;

            res.status(201).json(await list())
        }
        catch(err) {
            next(err)
        }
    }

    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const body = req.body;
            const { create } = CalendarService;

            res.status(201).json(await create(body as ICalendarDTO))
        }
        catch(err) {
            next(err)
        }
    }
}

export default new CalendarController();