import { Component, OnInit } from '@angular/core';
import {Product} from '../../product';
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

  isLoading: boolean;
  isSuccess: boolean;
  message: string;

  constructor(private productService: ProductService) {
    this.isLoading = false;
    this.updateList();
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

  updateList() {
    this.isLoading = true;
    this.productService.getList().subscribe( result => {
      this.isLoading = false;
      this.isSuccess = result.success;
      this.message = result.message;
      if (result.success) {
        this.productList = result.data;
      }
    }, error => {
      this.isLoading = false;
      this.isSuccess = false;
      this.message = 'Gặp lỗi chưa rõ!';
    });
  }
}
