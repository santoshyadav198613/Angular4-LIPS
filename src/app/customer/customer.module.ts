import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../sharedmodule/shared.module';
import { CustomerComponent } from './customer.component';

@NgModule({
    declarations: [CustomerComponent],
    imports: [SharedModule,
        CommonModule,
        RouterModule.forChild([
            { path: 'customer', component: CustomerComponent }
        ])
    ]
})
export class CustomerModule { }
