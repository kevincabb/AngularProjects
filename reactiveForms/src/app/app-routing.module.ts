import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserformsComponent } from './views/userforms/userforms.component';


const routes: Routes = [
  { path: '', redirectTo: 'userform', pathMatch: 'full' },
  { path: 'userform', component: UserformsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
