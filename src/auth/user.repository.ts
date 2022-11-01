import { CustomRepository } from "../custom-repository/typeorm-ex.decorator";
import { Repository } from "typeorm";
import { User } from "./user.entity";
import { authCredentialDto } from "./dto/auth-credential.dto";

@CustomRepository(User)
export class UserRepository extends Repository<User> {
    async createUser(authCredentialDto: authCredentialDto): Promise<void> 
    {
        const { username, password } = authCredentialDto;
        const user = this.create({username, password});

        await this.save(user);
    }
}