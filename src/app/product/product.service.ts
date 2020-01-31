import { Injectable } from '@angular/core';
import {Product} from '../product';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { environment } from '../../environments/environment';
import {HttpResult} from '../models/http-result';

@Injectable()
export class ProductService {
  constructor(private httpClient: HttpClient) { }

  apiUrl = environment.apiUrl;

  getList(): Observable<HttpResult> {
    return this.httpClient.get<HttpResult>(this.apiUrl + 'api/products');
  }
  addProduct(product: Product) {
    return this.httpClient.post(this.apiUrl + 'api/products', product);
  }

  deleteProduct(id: number) {
    return this.httpClient.delete(this.apiUrl + 'api/products/' + id);
  }
}
