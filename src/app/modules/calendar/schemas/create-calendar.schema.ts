import Joi from "joi";
import IUserDTO from "../../user/dtos/IUserDTO";
import ICalendarDTO from "../dtos/ICalendarDTO";

const createCalendar = Joi.object<ICalendarDTO>({
    title: Joi.string().required(),
    description: Joi.string().required(),
    day: Joi.string().required(),
    month: Joi.string().required(),
    year: Joi.string().required(),
    user: Joi.object<IUserDTO | { id: number }>({ id: Joi.number() }).required()
})

export default createCalendar.options({
    abortEarly: false,
    allowUnknown: true,
})