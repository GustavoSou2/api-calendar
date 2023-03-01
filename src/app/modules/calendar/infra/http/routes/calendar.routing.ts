import bodyParser from "body-parser";
import { celebrate, Segments } from "celebrate";
import { Router } from "express";
import createCalendarSchema from "../../../schemas/create-calendar.schema";
import CalendarController from "../controllers/CalendarController";

const calendarRoutes = Router();
calendarRoutes.use(bodyParser.json());     

calendarRoutes.get('/', CalendarController.list)
calendarRoutes.post(
    '/', 
    celebrate({ [Segments.BODY]: createCalendarSchema }),
    CalendarController.create
    )

export default calendarRoutes;