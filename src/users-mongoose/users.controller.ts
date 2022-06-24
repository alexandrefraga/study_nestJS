import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post()
  handle(@Body() user: any) {
    console.log(user);
    return this.userService.create(user);
  }
}
