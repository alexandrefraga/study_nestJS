import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user-dto';
import { MongoIdValidationPipe } from './pipes/mongo-id-validation-pipe';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {
    console.log('UsersController iniciado');
  }

  @Post()
  handle(@Body() user: CreateUserDto) {
    return this.userService.create(user);
  }

  @Get(':id')
  findById(@Param('id', MongoIdValidationPipe) userId: string) {
    return this.userService.findById(userId);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }
}
