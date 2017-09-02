import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InrPipe } from '../common/inr.pipe';
import { PricePipe } from '../common/price.pipe';
@NgModule({
    declarations: [InrPipe, PricePipe],
    imports: [CommonModule],
    exports: [FormsModule, ReactiveFormsModule, InrPipe, PricePipe]
})
export class SharedModule { }
