import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { ApplicationComponent } from './application/application.component';

const routes: Routes = [
  {path:"parent",component:AppComponent},
  {path:"application",component:ApplicationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToDoAppRoutingModule { }
