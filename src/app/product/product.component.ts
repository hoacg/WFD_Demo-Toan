import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


  @Input() product: Product;
  @Output() buyClick = new EventEmitter();

  // @Input() name = 'iPhone';
  // @Input() description = 'A product of Apple';
  // @Input() image = 'https://cdn.tgdd.vn/Products/Images/42/204651/vivo-y19-white-quanghai-400x460.png';

  constructor() { }

  ngOnInit() {
  }

  emitBuyClick() {
    this.buyClick.emit(); // emit an event
  }

}
