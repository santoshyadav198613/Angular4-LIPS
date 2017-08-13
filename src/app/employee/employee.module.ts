import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../sharedmodule/shared.module';
import { EmployeeComponent } from './employee.component';

@NgModule({
    declarations: [EmployeeComponent],
    imports: [SharedModule,
        CommonModule,
        RouterModule.forChild([
            { path: 'employee', component: EmployeeComponent }
        ])
    ]
})
export class EmployeeModule { }
