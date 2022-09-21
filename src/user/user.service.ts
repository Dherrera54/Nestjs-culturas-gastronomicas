import { Injectable } from '@nestjs/common';
import { User } from './user';
import { Action } from './Action ';

@Injectable()
export class UserService {
  private users: User[] = [
    //super usuario
    new User(1, 'admin', 'admin', [
      Action.Read,
      Action.Create,
      Action.Delete,
      Action.Update,
    ]),
    new User(2, 'user', 'admin', [Action.Read]), //usuario con permisos de lectura para todos los recursos
    new User(3, 'user_2', 'admin', [Action.Create, Action.Update]), //usuario con permisos de escritura (creación y actualización)
    new User(4, 'user_3', 'admin', [Action.Delete]), //con permisos de eliminación
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
