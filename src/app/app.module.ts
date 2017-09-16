import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutingModule } from '../app/routingmodule/routing.module';
import { CustomerModule } from '../app/customer/customer.module';
import { EmployeeModule } from '../app/employee/employee.module';
import { SharedModule } from '../app/sharedmodule/shared.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserdetailComponent } from './user/userdetail/userdetail.component';
import { EmployeeService } from '../app/service/employee/employee.service';
import { LoginService } from '../app/service/login/login.service';

import { apiEndPoint, EndPoint } from '../app/service/api/api.value';
import { OrderComponent } from './order/order.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';

import { AuthGuard } from '../app/service/guard/auth.guard';
import { PostComponent } from './post/post.component';
import { ApiInterceptor } from './interceptor/api.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserdetailComponent,
    OrderComponent,
    PagenotfoundComponent,
    LoginComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    CustomerModule,
    EmployeeModule,
    RoutingModule
  ],
  providers: [{ provide: EmployeeService, useClass: EmployeeService },
  { provide: EndPoint, useValue: apiEndPoint }, LoginService, AuthGuard,
  { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor , multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
