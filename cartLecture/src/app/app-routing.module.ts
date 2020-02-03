import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './views/components/product-list/product-list.component';
import { AddToCartComponent } from './views/components/add-to-cart/add-to-cart.component';


const routes: Routes = [
  {path: '', redirectTo: 'app-product-list', pathMatch: 'full'},
  {path: 'app-product-list', component: ProductListComponent},
  {path: 'app-add-to-cart', component: AddToCartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
