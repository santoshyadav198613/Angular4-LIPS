import { Component, OnInit } from '@angular/core';
import { Product } from '../service/product/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product = new Product();
  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.data.subscribe((data) => console.log(data['name']));
  }

  add() {
    console.log(this.product);
  }
}
