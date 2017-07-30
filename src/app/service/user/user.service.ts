import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable()
export class UserService {
  private userList: User[] = [{ userId: 1, name: 'test', address: 'test' }, {
    userId: 2, name: 'test1', address: 'test1'
  }, { userId: 3, name: 'test2', address: 'test2' }];
  constructor() { }

  getUser(): User[] {
    return this.userList;
  }
}
