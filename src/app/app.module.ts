import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { UserComponent } from './user/user.component';
import { UserdetailComponent } from './user/userdetail/userdetail.component';
import { EmployeeService } from '../app/service/employee/employee.service';

import { apiEndPoint, EndPoint } from '../app/service/api/api.value';
import { ProductComponent } from './product/product.component';
import { OrderComponent } from './order/order.component';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    UserComponent,
    UserdetailComponent,
    ProductComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: EmployeeService, useClass: EmployeeService },
  { provide: EndPoint, useValue: apiEndPoint }],
  bootstrap: [AppComponent]
})
export class AppModule { }
