import { Router } from "express";
import calendarRoutes from "../modules/calendar/infra/http/routes/calendar.routing";

const routes = Router();

routes.get('/', async (req, res) => {
    res.send('Welcome a MailAPI')
});

routes.use('/calendar', calendarRoutes)


export default routes;
