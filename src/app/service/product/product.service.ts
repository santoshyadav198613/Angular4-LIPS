import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable()
export class ProductService {
  productList: Product[] = [
    { id: 1, imageUrl: 'https://cdn.pixabay.com/photo/2017/01/06/19/15/soap-bubble-1958650_960_720.jpg', name: 'test', price: 1000 },
    { id: 2, imageUrl: 'https://cdn.pixabay.com/photo/2017/01/06/19/15/soap-bubble-1958650_960_720.jpg', name: 'test', price: 2000 },
    { id: 3, imageUrl: 'https://cdn.pixabay.com/photo/2017/01/06/19/15/soap-bubble-1958650_960_720.jpg', name: 'test', price: 3000 }
  ];
  constructor() { }

  getProducts() {
    return this.productList;
  }

  getProductById(id: number): Product[] {
    return this.productList.filter((product) => product.id === id);
  }


}
