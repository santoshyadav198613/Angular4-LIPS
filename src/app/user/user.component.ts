import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  name: string;
  userList = [{ userId: 1, name: 'test', address: 'test' }, {
    userId: 2, name: 'test1', address: 'test1'
  }, { userId: 3, name: 'test2', address: 'test2' }];
  toggleTable = true;
  constructor() { }

  ngOnInit() {
    this.name = 'test';
  }

  updateName() {
    this.name = 'new name';
  }

  toggle() {
    this.toggleTable = !this.toggleTable;
  }

}
