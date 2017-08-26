import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../sharedmodule/shared.module';
import { ProductComponent } from './product.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';

import { ProductService } from '../service/product/product.service';
import { AuthGuard } from '../service/guard/auth.guard';
import { ResolveDemo } from '../service/guard/resolve-demo.guard';

import { ProductDetailsGuard } from '../service/guard/product-details.guard';


@NgModule({
    declarations: [ProductComponent,
        ProductlistComponent,
        ProductdetailsComponent],
    imports: [SharedModule,
        CommonModule,
        RouterModule.forChild([
            {
                path: 'product', component: ProductComponent,
                canActivate: [AuthGuard],
                resolve: {
                    name: ResolveDemo
                }
            },
            {
                path: 'product/:id', component: ProductdetailsComponent,
                resolve: {
                    productDetails: ProductDetailsGuard
                }
            }
        ])
    ],
    providers: [ProductService, ResolveDemo, ProductDetailsGuard]
})
export class ProductModule { }
