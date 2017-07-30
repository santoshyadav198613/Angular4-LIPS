import { Injectable } from '@angular/core';
import { Employee } from './employee';

@Injectable()
export class EmployeeService {
  empList: Employee[] = [{
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

  getEmployees(): Employee[] {
    return this.empList;
  }
}
