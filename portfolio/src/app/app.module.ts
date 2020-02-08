import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import { AppComponent } from './app.component';
import { HeaderComponent } from './views/components/header/header.component';
import { FooterComponent } from './views/components/footer/footer.component';
import { IntroComponent } from './views/pages/intro/intro.component';
import { SkillsComponent } from './views/pages/skills/skills.component';
import { ProjectsComponent } from './views/pages/projects/projects.component';
import { ContactComponent } from './views/pages/contact/contact.component';
import { PanelComponent } from './views/components/panel/panel.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IntroComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    PanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    ScrollPanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
