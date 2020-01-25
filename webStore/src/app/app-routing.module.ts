import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './views/landing/pages/about/about.component';
import { LandingComponent } from './views/landing/landing.component';
import { ContactComponent } from './views/landing/pages/contact/contact.component';
import { CartComponent } from './views/landing/pages/cart/cart.component';
import { AccountComponent } from './views/landing/pages/account/account.component';
import { HomeComponent } from './views/landing/pages/home/home.component';
import { ProfileComponent } from './views/landing/pages/profile/profile.component';
import { OrdersComponent } from './views/landing/pages/orders/orders.component';
import { AccountSettingsComponent } from './views/landing/pages/account-settings/account-settings.component';


const routes: Routes = [
  {path: 'app-home', component: HomeComponent},
  {path: 'app-about', component: AboutComponent},
  {path: 'app-contact', component: ContactComponent},
  {
    path: 'app-account', 
    component: AccountComponent,
    children: [
      {path: '', component: ProfileComponent},
      {path: 'app-profile', component: ProfileComponent},
      {path: 'app-orders', component: OrdersComponent},
      {path: 'app-account-settings', component: AccountSettingsComponent}
    ]
  },
  {path: 'app-cart', component: CartComponent},
  {path: '', component: HomeComponent},
  {path: '**', redirectTo: "/app-home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
