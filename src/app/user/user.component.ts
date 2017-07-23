import { Component, OnInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { UserdetailComponent } from './userdetail/userdetail.component';

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
  @ViewChild(UserdetailComponent)
  userDetails: UserdetailComponent;
  @ViewChildren(UserdetailComponent)
  userDetailList: QueryList<UserdetailComponent>;
  constructor() { }

  // ngOnChanges(obj: SimpleChanges) {
  //   let data = obj;
  // }

  ngOnInit() {
    this.name = 'test';
  }

  // ngDoCheck() {
  //   let data = this.name;
  // }


  updateName() {
    this.name = 'new name';
  }

  toggle() {
    this.userDetails.hideClick();
    this.userDetailList.forEach((data) => data.hideClick());
    this.toggleTable = !this.toggleTable;
  }

  toggleVisible(isVisible: boolean) {
    this.toggleTable = isVisible;
  }



}
