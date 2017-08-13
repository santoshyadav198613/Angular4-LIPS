import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { UserComponent } from './user/user.component';
import { UserdetailComponent } from './user/userdetail/userdetail.component';
import { EmployeeService } from '../app/service/employee/employee.service';

import { apiEndPoint, EndPoint } from '../app/service/api/api.value';
import { ProductComponent } from './product/product.component';
import { CustomerComponent } from './customer/customer.component';
import { OrderComponent } from './order/order.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    UserComponent,
    UserdetailComponent,
    ProductComponent,
    OrderComponent,
    CustomerComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule, RouterModule.forRoot([
      { path: 'user', component: UserComponent },
      { path: 'customer', component: CustomerComponent },
      { path: 'employee', component: EmployeeComponent },
      { path: 'product', component: ProductComponent },
      { path: 'order', component: OrderComponent },
      { path: '', redirectTo: 'user', pathMatch: 'full' },
      { path: '**', component: PagenotfoundComponent }
    ])
  ],
  providers: [{ provide: EmployeeService, useClass: EmployeeService },
  { provide: EndPoint, useValue: apiEndPoint }],
  bootstrap: [AppComponent]
})
export class AppModule { }
