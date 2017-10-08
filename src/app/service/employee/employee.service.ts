import { Injectable, Inject } from '@angular/core';
import { Employee } from './employee';
import { HttpClient } from '@angular/common/http';
import { ApiEndpoint } from '../api/Iapi';
import { EndPoint } from '../api/api.value';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EmployeeService {
  empList: Employee[];
  constructor( @Inject(EndPoint) private apiEndPoint: ApiEndpoint, private http: HttpClient) { }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiEndPoint.endPoint + 'employee');
  }
}
