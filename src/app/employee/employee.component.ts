import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  name = 'test';
  newName: string;
  isVisible: boolean;
  employees = [{
    id: 1,
    name: 'test',
    address: 'pune'
  }, {
    id: 2,
    name: 'test1',
    address: 'mumbai'
  }, {
    id: 3,
    name: 'test2',
    address: 'pune'
  }];
  constructor() { }

  ngOnInit() {
  }

  updateName(name: string) {
    this.name = name;
    this.isVisible = !this.isVisible;
  }

}
