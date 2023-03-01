import { db } from './../../../../config/firebase.connection';
import { ICalendarService, ListQueryParams } from './../../services/ICalendarService';
import ICalendarDTO from "../../dtos/ICalendarDTO";
import { addDoc, collection, CollectionReference, DocumentReference, DocumentSnapshot, getDoc, getDocs, QuerySnapshot } from 'firebase/firestore';

class CalendarService implements ICalendarService {
    readonly collection: string = "calendar";
    collectionRef!: CollectionReference<ICalendarDTO>;

    constructor() {
        this.collectionRef = collection(db, this.collection) as CollectionReference<ICalendarDTO>; 
    }

    async create(data: ICalendarDTO) {
        return await addDoc(collection(db, "calendar"), data);   
    }

    async list(params?: ListQueryParams | undefined) {
        return await (await getDocs(collection(db, "calendar")))

    }
    find(id: number): Promise<DocumentSnapshot<ICalendarDTO>> {
        throw new Error("Method not implemented.");
    }
    delete(id: number): Promise<void> {
        throw new Error("Method not implemented.");
    }
    update(id: number, data: ICalendarDTO): Promise<void> {
        throw new Error("Method not implemented.");
    }

}

export default new CalendarService()