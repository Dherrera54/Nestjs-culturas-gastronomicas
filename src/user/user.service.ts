import { Injectable } from '@nestjs/common';
import { User } from './user';
import { Action } from './Action ';

@Injectable()
export class UserService {
  private users: User[] = [
    new User(1, 'admin', 'admin', [
      Action.Read,
      Action.Create,
      Action.Delete,
      Action.Update,
    ]),
    new User(2, 'user', 'admin', [Action.Read]),
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
