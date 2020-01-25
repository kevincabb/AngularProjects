import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './views/landing/landing.component';
import { HeaderComponent } from './views/landing/components/header/header.component';
import { FooterComponent } from './views/landing/components/footer/footer.component';
import { AboutComponent } from './views/landing/pages/about/about.component';
import { ContactComponent } from './views/landing/pages/contact/contact.component';
import { AccountComponent } from './views/landing/pages/account/account.component';
import { CartComponent } from './views/landing/pages/cart/cart.component';
import { HomeComponent } from './views/landing/pages/home/home.component';
import { TitleComponent } from './shared/components/title/title.component';
import { SidebarModule } from 'primeng/sidebar';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideComponent } from './shared/components/side/side.component';

import {ScrollPanelModule} from 'primeng/scrollpanel';
import { PanelComponent } from './shared/components/panel/panel.component';
import { FormsComponent } from './shared/components/forms/forms.component';
import { InputBoxComponent } from './shared/components/input-box/input-box.component';
import { AccountHeaderComponent } from './views/landing/components/account-header/account-header.component';
import { OrdersComponent } from './views/landing/pages/orders/orders.component';
import { ProfileComponent } from './views/landing/pages/profile/profile.component';
import { AccountSettingsComponent } from './views/landing/pages/account-settings/account-settings.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    AccountComponent,
    CartComponent,
    HomeComponent,
    TitleComponent,
    SideComponent,
    PanelComponent,
    FormsComponent,
    InputBoxComponent,
    AccountHeaderComponent,
    OrdersComponent,
    ProfileComponent,
    AccountSettingsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    SidebarModule,
    ScrollPanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
