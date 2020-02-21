import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './views/pages/menu/menu.component';
import { OptionsComponent } from './views/pages/options/options.component';
import { GameComponent } from './views/pages/game/game.component';
import { ResultsComponent } from './views/pages/results/results.component';
import { SplashComponent } from './views/pages/splash/splash.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    OptionsComponent,
    GameComponent,
    ResultsComponent,
    SplashComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
