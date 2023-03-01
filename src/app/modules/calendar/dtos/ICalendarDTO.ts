import IDefaultDTO from '../../../../shared/models/IDefaultDTO'
import IUserDTO from '../../user/dtos/IUserDTO';

export default interface ICalendarDTO extends IDefaultDTO{
    title: string;
    description: string;
    day: string;
    month: string;
    year: string;
    user: IUserDTO;
}