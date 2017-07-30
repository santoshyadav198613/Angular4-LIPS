import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  private userList = [{ userId: 1, name: 'test', address: 'test' }, {
    userId: 2, name: 'test1', address: 'test1'
  }, { userId: 3, name: 'test2', address: 'test2' }];
  constructor() { }

  getUser() {
    return this.userList;
  }
}
