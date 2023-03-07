import { Router } from "express";
import calendarRoutes from "../modules/calendar/infra/http/routes/calendar.routing";
import loginRoutes from "../modules/login/infra/http/routes/login.routing";
import userRoutes from "../modules/user/infra/http/routes/user.routing";

const routes = Router();

routes.get('/', async (req, res) => {
    res.send('Welcome a MailAPI')
});

routes.use('/calendar', calendarRoutes)
routes.use('/users', userRoutes)
routes.use('/login', loginRoutes)

export default routes;
