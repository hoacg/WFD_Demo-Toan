import { Component, OnInit } from '@angular/core';
import {Product} from '../product';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  productList: Product[];
  buyItems = 0;
  isFormHidden = true;

  constructor(private productService: ProductService) {
    this.productList = this.productService.getList();
  }

  addToCart(product: Product) {
    this.buyItems += product.price;
  }

  showForm() {
    this.isFormHidden = !this.isFormHidden;
  }

  addProduct(product: Product) {
    this.productList.push(product);
  }

}
