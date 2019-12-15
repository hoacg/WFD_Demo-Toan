import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductAddComponent} from './product-add/product-add.component';
import {ProductCategoriesComponent} from './product-categories/product-categories.component';
import {ProductComponent} from './product-item/product.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ProductService} from './product.service';


const routers: Routes = [
  {
    path: '',
    component: ProductListComponent
  },
  {
    path: 'add-product',
    component: ProductAddComponent
  },
  {
    path: 'categories',
    component: ProductCategoriesComponent
  }
];


@NgModule({
  declarations: [
    ProductListComponent,
    ProductAddComponent,
    ProductCategoriesComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routers),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    ProductListComponent
  ],
  providers: [ProductService]
})
export class ProductModule { }
