import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Product} from '../product';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {


  productForm: FormGroup = new FormGroup({
    productName: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl(''),
    image: new FormControl(''),
  });

  @Output() addProduct = new EventEmitter<Product>();

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    const product = this.productForm.value;
    this.addProduct.emit(product);
  }

}
