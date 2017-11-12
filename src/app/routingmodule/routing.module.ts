import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UserComponent } from '../user/user.component';
import { OrderComponent } from '../order/order.component';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';
import { LoginComponent } from '../login/login.component';
import { PostComponent } from '../post/post.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'user', component: UserComponent },
      { path: 'order', component: OrderComponent },
      { path: 'post', component: PostComponent },
      { path: 'product', loadChildren: '../product/product.module#ProductModule', data: { preload: true } },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: '**', component: PagenotfoundComponent }
    ])
  ],
  declarations: [],
  exports: [RouterModule]
})
export class RoutingModule { }
