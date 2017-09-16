import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MdButtonModule } from '@angular/material';

import { InrPipe } from '../common/inr.pipe';
import { PricePipe } from '../common/price.pipe';
@NgModule({
    declarations: [InrPipe, PricePipe],
    imports: [CommonModule, MdButtonModule],
    exports: [FormsModule, ReactiveFormsModule, InrPipe,
        PricePipe, HttpClientModule, MdButtonModule]
})
export class SharedModule { }
