import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroComponent } from './views/pages/intro/intro.component';
import { SkillsComponent } from './views/pages/skills/skills.component';
import { ProjectsComponent } from './views/pages/projects/projects.component';
import { ContactComponent } from './views/pages/contact/contact.component';


const routes: Routes = [
  {path: '', component: IntroComponent},
  {path: 'app-intro', component: IntroComponent},
  {path: 'app-skills', component: SkillsComponent},
  {path: 'app-projects', component: ProjectsComponent},
  {path: 'app-contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
