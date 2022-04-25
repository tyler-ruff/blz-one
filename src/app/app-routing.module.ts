import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ServicesComponent } from './services/services.component';
import { UnknownComponent } from './unknown/unknown.component';

const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'services', component: ServicesComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: UnknownComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
