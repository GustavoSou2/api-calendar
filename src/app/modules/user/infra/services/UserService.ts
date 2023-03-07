import { db } from './../../../../config/firebase.connection';
import { addDoc, collection, CollectionReference, DocumentReference, DocumentSnapshot, getDoc, getDocs, QuerySnapshot } from 'firebase/firestore';
import { IUserService } from '../../services/IUserService';
import IUserDTO from '../../dtos/IUserDTO';

class UserService implements IUserService {
    readonly collection: string = "calendar";
    collectionRef!: CollectionReference<IUserDTO>;

    constructor() {
        this.collectionRef = collection(db, this.collection) as CollectionReference<IUserDTO>; 
    }

    async create(data: IUserDTO) {
        return await addDoc(collection(db, "users"), data);   
    }

    async list() {
        return await (await getDocs(collection(db, "users")))
    }
    find(id: number): Promise<DocumentSnapshot<IUserDTO>> {
        throw new Error("Method not implemented.");
    }
    delete(id: number): Promise<void> {
        throw new Error("Method not implemented.");
    }
    update(id: number, data: IUserDTO): Promise<void> {
        throw new Error("Method not implemented.");
    }

}

export default new UserService()