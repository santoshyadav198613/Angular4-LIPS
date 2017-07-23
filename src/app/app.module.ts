import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { UserComponent } from './user/user.component';
import { UserdetailComponent } from './user/userdetail/userdetail.component';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
