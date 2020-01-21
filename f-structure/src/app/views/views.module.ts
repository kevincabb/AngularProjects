import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { SharedModule } from '../shared/shared.module';
import { CardCountComponent } from './landing/component/card-count/card-count.component';
import { CardListComponent } from './landing/component/card-list/card-list.component';



@NgModule({
  declarations: [LandingComponent, CardCountComponent, CardListComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    LandingComponent
  ]
})
export class ViewsModule { }
