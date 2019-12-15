import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductModule} from '../product/product.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import {RouterModule, Routes} from '@angular/router';
import {ProvidersModule} from '../providers/providers.module';

const routers: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  }
]

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routers),
    ProductModule,
    ProvidersModule
  ]
})
export class AdminModule { }
