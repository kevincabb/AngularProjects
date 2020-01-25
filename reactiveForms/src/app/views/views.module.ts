import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserformsComponent } from './userforms/userforms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { from } from 'rxjs';



@NgModule({
  declarations: [UserformsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],

  exports: [
    UserformsComponent,
  ]
})
export class ViewsModule { }
