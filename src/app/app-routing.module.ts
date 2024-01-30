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
import { RegisterationComponent } from './registeration/registeration.component';
import { CarComponent } from './car/car.component';
import { EmployTableComponent } from './employ-table/employ-table.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { AccountsComponent } from './accounts/accounts.component';
import { PhotoesComponent } from './photoes/photoes.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { MailComponent } from './mail/mail.component';
import { ActivityComponent } from './activity/activity.component';
import { StudentsComponent } from './students/students.component';

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
    {path:"product", component:ProductComponent},
    {path:"registration",component:RegisterationComponent},
    {path:"car", component:CarComponent},
    {path:"employee",component:EmployTableComponent},
    {path:"vehicle",component:VehicleComponent},
    {path:"accounts",component:AccountsComponent},
    {path:"photoes",component:PhotoesComponent},
    {path:"flipkart",component:FlipkartComponent},
    {path:"mail",component:MailComponent},
    {path:"activity",component:ActivityComponent},
    {path:"students",component:StudentsComponent}

  ]},
  {path:'',component:LoginComponent},
  {path:'**', component:PageNotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
