import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const routers: Routes = [
  {
    path: 'products',
    loadChildren: './product/product.module#ProductModule'
  },
  {
    path: 'providers',
    loadChildren: './providers/providers.module#ProvidersModule'
  },
  {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
