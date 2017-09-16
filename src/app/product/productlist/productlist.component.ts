import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product/product.service';
import { Product } from '../../service/product/product';
import { MdDialog } from '@angular/material';
import { ProductEditComponent } from '../product-edit/product-edit.component';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  productList: Product[];
  price: number = 1;
  constructor(private _productService: ProductService,
    private dialogService: MdDialog) { }

  ngOnInit() {
    this.productList = this._productService.getProducts();
  }

  openEdit(product: Product) {
    let dialogRef = this.dialogService.open(ProductEditComponent, {
      data: product
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }
}
