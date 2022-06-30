import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { User } from './entities/user.entity'

@Injectable ()
export class UserService {
  users: User[] = [];

    findAll() {
      return this.users;
    }
    create(createUserDTO: CreateUserDTO){
      const user: User = { id:'random_id', ...createUserDTO };
        this.users.push(user);
          return user;
    }
}
