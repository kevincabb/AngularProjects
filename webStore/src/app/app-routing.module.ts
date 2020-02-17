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
import { SettingAddressesComponent } from './views/landing/pages/setting-addresses/setting-addresses.component';
import { SettingInformationComponent } from './views/landing/pages/setting-information/setting-information.component';
import { SettingPaymentComponent } from './views/landing/pages/setting-payment/setting-payment.component';
import { CartHomeComponent } from './views/landing/pages/cart-home/cart-home.component';
import { CartCheckoutComponent } from './views/landing/pages/cart-checkout/cart-checkout.component';
import { CartConfirmComponent } from './views/landing/pages/cart-confirm/cart-confirm.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'app-about', component: AboutComponent},
  {path: 'app-contact', component: ContactComponent},
  {
    path: 'app-account', 
    component: AccountComponent,
    children: [
      {path: '', component: ProfileComponent},
      {path: 'app-profile', component: ProfileComponent},
      {path: 'app-orders', component: OrdersComponent},
      {path: 'app-account-settings', component: AccountSettingsComponent, 
      children:[
        {path: '', component: SettingInformationComponent},
        {path: 'app-setting-information', component: SettingInformationComponent},
        {path: 'app-setting-addresses', component: SettingAddressesComponent},
        {path: 'app-setting-payment', component: SettingPaymentComponent},
      ]}
    ]
  },
  {path: 'app-cart', component: CartComponent, 
  children:[
    {path: '', component: CartHomeComponent},
    {path: 'app-cart-checkout', component: CartCheckoutComponent},
    {path: 'app-cart-confirm', component: CartConfirmComponent}
  ]},
  {path: '', component: HomeComponent},
  {path: '**', redirectTo: "./app-home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
