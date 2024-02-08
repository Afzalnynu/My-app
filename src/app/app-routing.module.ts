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
import { VehicleCarsComponent } from './vehicle-cars/vehicle-cars.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { AuthenticationGuard } from './authentication.guard';
import { CreateUserComponent } from './create-user/create-user.component';
import { OnlineAccountComponent } from './online-account/online-account.component';
import { StudentFormsComponent } from './student-forms/student-forms.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductTableComponent } from './product-table/product-table.component';
import { ParentComponent } from './parent/parent.component';
import { ClientComponent } from './client/client.component';
import { ClientFormComponent } from './client-form/client-form.component';
import { ClientService } from './client.service';
import { AnimalsComponent } from './animals/animals.component';
import { SiblingsComponent } from './siblings/siblings.component';

const routes: Routes = [
  {path:"login", component:LoginComponent},
  {path:"dashbard", component:DashbardComponent, canActivate:[AuthenticationGuard], children:[
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
    {path:"students",component:StudentsComponent},
    {path:"vehicleCars",component:VehicleCarsComponent},
    {path:"createAccount",component:CreateAccountComponent},
    {path:"createStudentInfo",component:CreateStudentComponent},
    {path:"createUser", component:CreateUserComponent},
    {path:"onlineAccount",component:OnlineAccountComponent},
    {path:"studentform", component:StudentFormsComponent},
    {path:"productForm",component:ProductFormComponent},
    {path:"productTabel",component:ProductTableComponent},
    {path:"parent", component:ParentComponent},
    {path:"edit-vehicle/:id",component:VehicleCarsComponent},
    {path:"edit-student/:id",component:StudentFormsComponent},
    {path:"edit-account/:id",component:CreateAccountComponent},
    {path:"client",component:ClientComponent},
    {path:"client-form",component:ClientFormComponent},
    {path:"edit-client",component:ClientComponent},
    {path:"edit-product-tabel/:id",component:ProductFormComponent},
    {path:"animals",component:AnimalsComponent},
    {path:"siblings",component:SiblingsComponent}

  ]},
  {path:'',component:LoginComponent},
  {path:'**', component:PageNotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
