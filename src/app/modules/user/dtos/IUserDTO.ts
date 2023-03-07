import { StringLike } from '@firebase/util';
import IDefaultDTO from '../../../../shared/models/IDefaultDTO'

export default interface IUserDTO extends IDefaultDTO {
    username: string;
    phone: string;
    email: string;
    password: string;
    isConfirmed: boolean;
}