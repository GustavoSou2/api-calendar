import { Timestamp } from "firebase/firestore";

export default interface DefaultDTO {
    uid?: string;
    createdAt?: Timestamp;
    updatedAt?: Timestamp;
    deletedAt?: Timestamp;
}