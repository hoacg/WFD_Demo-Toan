import { Injectable } from '@angular/core';
import {Product} from '../product';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class ProductService {
  constructor(private httpClient: HttpClient) { }

  getList(): Observable<Product[]> {
    return this.httpClient.get<Product[]>('http://localhost:5000/api/products');
  }
  addProduct(product: Product) {
    return this.httpClient.post('http://localhost:5000/api/products', product);
  }

  deleteProduct(id: number) {
    return this.httpClient.delete('http://localhost:5000/api/products/' + id);
  }
}
