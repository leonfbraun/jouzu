import {
  Controller,
  Get,
  Param,
  Body,
  Post,
  Patch,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  addUser(
    @Body('name') userName: string,
    @Body('occupation') userOccupation: string,
  ): any {
    const generatedId = this.usersService.insertUser(userName, userOccupation);
    return { id: generatedId, name: userName, occupation: userOccupation };
  }

  @Get()
  getAllUsers() {
    return this.usersService.getUsers();
  }

  @Get('id/:id')
  getUserById(@Param('id') userId: string) {
    return this.usersService.getSingleUserById(userId);
  }
  @Get('name/:name')
  getUserByName(@Param('name') userName: string) {
    return this.usersService.getSingleUserByName(userName);
  }

  @Patch(':id')
  updateUser(
    @Param('id') userId: string,
    @Body('name') userName: string,
    @Body('occupation') userOccupation: string,
  ) {
    this.usersService.updateUser(userId, userName, userOccupation);
    return null;
  }

  @Delete(':id')
  removeUser(@Param('id') userId: string) {
    this.usersService.removeUser(userId);
    return `User with ID:${userId} deleted`;
  }
}
