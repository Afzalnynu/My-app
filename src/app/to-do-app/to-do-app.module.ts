import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToDoAppRoutingModule } from './to-do-app-routing.module';
import { ApplicationComponent } from './application/application.component';
import { TextareaComponent } from './textarea/textarea.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreatebuttonComponent } from './createbutton/createbutton.component';
import { GivenDataComponent } from './given-data/given-data.component';
import { ViewComponentComponent } from './view-component/view-component.component';


@NgModule({
  declarations: [
    ApplicationComponent,
    TextareaComponent,
    CreatebuttonComponent,
    GivenDataComponent,
    ViewComponentComponent,
  ],
  imports: [
    CommonModule,
    ToDoAppRoutingModule,
    ReactiveFormsModule
  ]
})
export class ToDoAppModule { }
