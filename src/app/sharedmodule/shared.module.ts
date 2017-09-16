import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MdButtonModule, MdDialogModule } from '@angular/material';

import { InrPipe } from '../common/inr.pipe';
import { PricePipe } from '../common/price.pipe';
@NgModule({
    declarations: [InrPipe, PricePipe],
    imports: [CommonModule, MdButtonModule, MdDialogModule],
    exports: [FormsModule, ReactiveFormsModule, InrPipe,
        PricePipe, HttpClientModule, MdButtonModule, MdDialogModule]
})
export class SharedModule { }
