import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SplashComponent } from './views/pages/splash/splash.component';
import { MenuComponent } from './views/pages/menu/menu.component';
import { OptionsComponent } from './views/pages/options/options.component';
import { GameComponent } from './views/pages/game/game.component';
import { ResultsComponent } from './views/pages/results/results.component';


const routes: Routes = [
  {path: '', component: SplashComponent},
  {path: '**', redirectTo: "./app-splash"},
  {path: 'app-splash', component: SplashComponent},
  {path: 'app-menu', component: MenuComponent},
  {path: 'app-options', component: OptionsComponent},
  {path: 'app-game', component: GameComponent},
  {path: 'app-results', component: ResultsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
