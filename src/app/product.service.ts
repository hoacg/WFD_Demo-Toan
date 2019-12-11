import { Injectable } from '@angular/core';
import {Product} from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productList: Product[] = [
    {
      id: 1,
      name: 'iPhone 11',
      price: 1000,
      description: 'Apple product',
      image: 'https://cdn.tgdd.vn/Products/Images/42/153856/iphone-11-red-2-400x460.png'
    },

    {
      id: 2,
      name: 'Galaxy S10',
      price: 500,
      description: 'Samsung product',
      image: 'https://cdn.tgdd.vn/Products/Images/42/179530/samsung-galaxy-s10-plus-black-400x460.png'
    }
  ];

  constructor() { }
  getList() {
    return this.productList;
  }
  addProduct(product: Product) {
    this.productList.push(product);
  }
}
