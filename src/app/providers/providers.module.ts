import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProviderListComponent } from './provider-list/provider-list.component';
import { ProviderAddComponent } from './provider-add/provider-add.component';
import {RouterModule, Routes} from '@angular/router';

const routers: Routes = [
  {
    path: '',
    component: ProviderListComponent
  },
  {
    path: 'add',
    component: ProviderAddComponent
  }
];

@NgModule({
  declarations: [ProviderListComponent, ProviderAddComponent],
  exports: [
    ProviderListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routers)
  ]
})
export class ProvidersModule { }
