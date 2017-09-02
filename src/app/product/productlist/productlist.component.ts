import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product/product.service';
import { Product } from '../../service/product/product';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  productList: Product[];
  price: number =1;
  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this.productList = this._productService.getProducts();
  }
}
