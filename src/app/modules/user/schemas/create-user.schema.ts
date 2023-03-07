import Joi from "joi";
import IUserDTO from "../../user/dtos/IUserDTO";

const createCalendar = Joi.object<IUserDTO>({
    username: Joi.string().required(),
    phone: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
    isConfirmed: Joi.boolean().required(),
})

export default createCalendar.options({
    abortEarly: false,
    allowUnknown: true,
})