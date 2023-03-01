import { DocumentReference, DocumentSnapshot, QuerySnapshot } from "firebase/firestore";
import ICalendarDTO from "../dtos/ICalendarDTO";

export interface ListQueryParams {
    year?: string;
    day?: string;
    month?: string;
    userId?: string;
}

export interface ICalendarService {
    list(params?: ListQueryParams): any;
    create(data: ICalendarDTO): any;
    find(id: number): Promise<DocumentSnapshot<ICalendarDTO>>;
    delete(id: number): Promise<void>;
    update(id: number, data: ICalendarDTO): Promise<void>;
}