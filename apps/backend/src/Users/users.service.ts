import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './users.model';

@Injectable()
export class UsersService {
  private users: User[] = [];

  insertUser(name: string, occupation: string) {
    const userId = Math.floor(Math.random() * 1000).toString();
    const newUser = new User(userId, name, occupation);
    this.users.push(newUser);
    return userId;
  }

  getUsers() {
    return [...this.users];
  }

  getSingleUserById(userId: string) {
    const user = this.findUserById(userId)[0];
    return { ...user };
  }

  getSingleUserByName(userName: string) {
    const user = this.findUserByName(userName)[0];
    return { ...user };
  }

  findUserById(userId: string): [User, number] {
    const userIndex = this.users.findIndex((a) => a.id === userId);
    const user = this.users[userIndex];
    if (!user) {
      throw new NotFoundException('Could not find user with this ID.');
    }
    return [user, userIndex];
  }

  findUserByName(userName: string): [User, number] {
    const userIndex = this.users.findIndex((a) => a.name === userName);
    const user = this.users[userIndex];
    if (!user) {
      throw new NotFoundException('Could not find user with this name.');
    }
    return [user, userIndex];
  }

  updateUser(userId: string, userName: string, userOccupation: string) {
    const [user, index] = this.findUserById(userId);
    const updatedUser = { ...user };
    if (userName) {
      updatedUser.name = userName;
    }
    if (userOccupation) {
      updatedUser.occupation = userOccupation;
    }
    this.users[index] = updatedUser;
  }

  removeUser(userId: string) {
    const index = this.findUserById(userId)[1];
    this.users.splice(index, 1);
  }
}

// getSingleUser(userId: string) {
//   const user = this.findUser(userId)[0];
//   return { ...user };
// }

// findUser(userId: string): [User, string] {
//   const userIndex = this.users.findIndex((usr) => usr.id === userId);
//   const user = this.users[userIndex];
//   if (!user) {
//     throw new NotFoundException('Could not find user.');
//   }
//   return [user, userIndex];
// }

// updateUser(userId: string, userName: string, userOccupation: string) {
//   const [user, index] = this.findUser(userId);
//   const updatedUser = { ...user };
//   if (userName) {
//     updatedUser.name = userName;
//   }
//   if (userOccupation) {
//     updatedUser.occupation = userOccupation;
//   }
//   this.users[index] = updatedUser;
// }
