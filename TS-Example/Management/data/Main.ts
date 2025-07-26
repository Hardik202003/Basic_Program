import { UserService } from "../service/user"
import { User } from "../Model/User"

const newUser: User = {
    id: 5,
    Name: "Aisha",
    email: "aisha.khan@example.com",
    role: "Software Engineer",
    createdDate: "2021-01-15",
    updatedDate: "2023-12-20",
    address: {
        street: "456 Oak Avenue",
        city: "Chicago",
        state: "IL",
        zipCode: "60601"
    }
}

const userService = new UserService();
userService.add(newUser);  

const updateUser: User  = {
    id: 3,
    Name: "hardik",
    email: "hardik123@example.com",
    role: "Software Engineer",
    createdDate: "2021-01-15",
    updatedDate: "2023-12-20",
    address: {
        street: "456 Oak Avenue",
        city: "panvi",
        state: "guj",
        zipCode: "60601"
    }
    
}

//userService.update(updateUser);



const deleteUser :User = {
        id: 2,
        Name: "Aisha",
        email: "aisha.khan@example.com",
        role: "Software Engineer",
        createdDate: "2021-01-15",
        updatedDate: "2023-12-20",
        address: {
            street: "456 Oak Avenue",
            city: "Chicago",
            state: "IL",
            zipCode: "60601"
        }
    }


//userService.delete(deleteUser);
console.log(userService.getAll());

//console.log(userService.getById(3));