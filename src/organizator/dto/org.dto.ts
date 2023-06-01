import { CreateUserDto } from "src/users/dto/create-user-dto";

export class Org extends CreateUserDto{

        readonly isOrg: boolean;

        constructor(){
                super();
        }
         
}