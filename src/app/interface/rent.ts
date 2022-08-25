import { Car } from "./car";
import { User } from "./user";

export interface Rent {
    id?:string;
    user:User;
    car:Car;
    rentStartDate:Date;
    rentEndDate:Date;
}
