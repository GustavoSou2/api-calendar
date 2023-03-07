import { DocumentReference, DocumentSnapshot, QuerySnapshot } from "firebase/firestore";
import { IDefaultService } from "../../../../shared/infra/service/IDefaultService";
import IUserDTO from "../dtos/IUserDTO";

export interface IUserService extends IDefaultService<IUserDTO> {}