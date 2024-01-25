import { Component, Directive, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashbardComponent } from './dashbard/dashbard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CalculaterComponent } from './calculater/calculater.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BmiComponent } from './bmi/bmi.component';
import { DirectiveComponent } from './directive/directive.component';
import { MarksComponent } from './marks/marks.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path:"login", component:LoginComponent},
  {path:"dashbard", component:DashbardComponent,children:[
    {path:"home", component:HomeComponent},
    {path:'',component:HomeComponent},
    {path:"about",component:AboutComponent},
    {path:"dataBanding",component:DataBindingComponent},
    {path: "calculater",component:CalculaterComponent},
    {path:"rectangle", component:RectangleComponent},
    {path:"circle",component:CircleComponent},
    {path:'bmi',component:BmiComponent},
    {path:"directive",component:DirectiveComponent},
    {path:"marks",component:MarksComponent},
    {path:"product", component:ProductComponent}

  ]},
  {path:'',component:LoginComponent},
  {path:'**', component:PageNotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
