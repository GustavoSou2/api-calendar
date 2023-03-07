import { db } from './../../../../config/firebase.connection';
import { addDoc, collection, CollectionReference, DocumentReference, DocumentSnapshot, getDoc, getDocs, QuerySnapshot } from 'firebase/firestore';
import { IDefaultService } from '../../../../../shared/infra/service/IDefaultService';


class LoginService {
    constructor() {}

    async validateCredentials(data: any) {
        console.log(data);
    }
}

export default new LoginService()