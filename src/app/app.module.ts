import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { UserComponent } from './user/user.component';
import { UserdetailComponent } from './user/userdetail/userdetail.component';
import { EmployeeService } from '../app/service/employee/employee.service';

import { ApiEndpoint } from '../app/service/api/Iapi';
import { apiEndPoint, EndPoint } from '../app/service/api/api.value';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    UserComponent,
    UserdetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [{ provide: EmployeeService, useClass: EmployeeService },
  { provide: EndPoint, useValue: apiEndPoint }],
  bootstrap: [AppComponent]
})
export class AppModule { }
