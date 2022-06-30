import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UserService } from './user.service'
import { ApiTags } from '@nestjs/swagger';

@ApiTags('user')
@Controller('user')

export class UserController {
  constructor(private userService: UserService) {}

  @Get()
    findAll() {
      return this.userService.findAll();
    }
  @Post()
    create(@Body() createUserDTO: CreateUserDTO) {
      return this.userService.create(createUserDTO);
    }
}
