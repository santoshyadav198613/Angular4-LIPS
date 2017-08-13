import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'

import { UserComponent } from '../user/user.component';
import { ProductComponent } from '../product/product.component';
import { OrderComponent } from '../order/order.component';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: 'user', component: UserComponent },
      { path: 'product', component: ProductComponent },
      { path: 'order', component: OrderComponent },
      { path: '', redirectTo: 'user', pathMatch: 'full' },
      { path: '**', component: PagenotfoundComponent }
    ])
  ],
  declarations: [],
  exports: [RouterModule]
})
export class RoutingModule { }
