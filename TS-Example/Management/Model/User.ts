import { BaseEntity } from "./Base-Entity"

export interface User extends BaseEntity {
    Name: string;
    role: string;
    email: string;
    address: Address;
}


interface  Address {
        street: string;
        city: string;
        state: string;
        zipCode: string;
    }




