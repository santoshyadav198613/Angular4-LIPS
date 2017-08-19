import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../sharedmodule/shared.module';
import { ProductComponent } from './product.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';

import { ProductService } from '../service/product/product.service';

@NgModule({
    declarations: [ProductComponent, ProductlistComponent, ProductdetailsComponent],
    imports: [SharedModule,
        CommonModule,
        RouterModule.forChild([
            { path: 'product', component: ProductComponent },
            { path: 'product/:id', component: ProductdetailsComponent }
        ])
    ],
    providers: [ProductService]
})
export class ProductModule { }
