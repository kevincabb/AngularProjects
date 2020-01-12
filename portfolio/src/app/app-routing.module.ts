import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ProjectsComponent } from './pages/projects/projects.component';


const routes: Routes = [
  {
    path: 'home', component: HomeComponent },
    {path: 'about', component: AboutComponent},
    {path: 'skills', component: SkillsComponent},
    {path: 'projects', component: ProjectsComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
