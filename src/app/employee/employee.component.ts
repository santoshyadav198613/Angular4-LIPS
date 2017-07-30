import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee/employee.service';
import { Employee } from '../service/employee/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  name = 'test';
  newName: string;
  isVisible: boolean;
  employees: Employee[];
  constructor(private _empService: EmployeeService) { }

  ngOnInit() {
    this.employees = this._empService.getEmployees();
  }

  updateName(name: string) {
    this.name = name;
    this.isVisible = !this.isVisible;
  }

}
