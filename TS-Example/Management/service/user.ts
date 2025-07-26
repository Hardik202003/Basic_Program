import { User } from "../Model/User";
import { userData } from "../data/Data";

export class UserService {
    
    getAll(): User[] {
        return userData;
    }

    add(emp: User): void {
        userData.push(emp);
    }

    getById(id: number): User | undefined {
        return userData.find((emp: User) => emp.id === id);
    } 

    update(updated: User): void {
        const index = userData.findIndex((emp: User)  => emp.id === updated.id);
        userData[index] = { ...updated };
    }

    delete(employeeToDelete: User): void {
        const index = userData.findIndex((e: User) => e.id === employeeToDelete.id);
        userData.splice(index, 1);
    }
}
