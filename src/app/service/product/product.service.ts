import { Injectable } from '@angular/core';
import { Product } from './product';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductService {

  constructor(isValidUser: boolean, private http: HttpClient) {
    console.log(isValidUser);
  }

  getProducts() {
    return this.http.get<Product[]>('http://localhost:3000/product');
  }

  addProduct(product: Product) {
    return this.http.post('http://localhost:3000/product', product);
  }

  getProductById(id: number) {
    return this.http.get<Product>('http://localhost:3000/product/' + id);
  }

  updateProduct(product: Product) {
    return this.http.put('http://localhost:3000/product/', product);
  }


}
