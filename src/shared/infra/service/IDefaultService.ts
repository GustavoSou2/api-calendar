import { DocumentSnapshot } from 'firebase/firestore';

export interface IDefaultService<T> {
    list(): any;
    create(data: T): any;
    find(id: number): Promise<DocumentSnapshot<T>>;
    delete(id: number): Promise<void>;
    update(id: number, data: T): Promise<void>;
}