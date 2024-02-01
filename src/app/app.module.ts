import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashbardComponent } from './dashbard/dashbard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalculaterComponent } from './calculater/calculater.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BmiComponent } from './bmi/bmi.component';
import { DirectiveComponent } from './directive/directive.component';
import { MarksComponent } from './marks/marks.component';
import { ProductComponent } from './product/product.component';
import { PipePipe } from './pipe.pipe';
import { RatingPipe } from './rating.pipe';
import { RegisterationComponent } from './registeration/registeration.component';
import { CarComponent } from './car/car.component';
import { EmployTableComponent } from './employ-table/employ-table.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { HttpClientModule } from '@angular/common/http';
import { AccountsComponent } from './accounts/accounts.component';
import { PhotoesComponent } from './photoes/photoes.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { MailComponent } from './mail/mail.component';
import { ActivityComponent } from './activity/activity.component';
import { StudentsComponent } from './students/students.component';
import { VehicleCarsComponent } from './vehicle-cars/vehicle-cars.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { OnlineAccountComponent } from './online-account/online-account.component';
import { StudentFormsComponent } from './student-forms/student-forms.component';
import { ProductFormComponent } from './product-form/product-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashbardComponent,
    PageNotFoundComponent,
    HomeComponent,
    AboutComponent,
    DataBindingComponent,
    CalculaterComponent,
    RectangleComponent,
    CircleComponent,
    BmiComponent,
    DirectiveComponent,
    MarksComponent,
    ProductComponent,
    PipePipe,
    RatingPipe,
    RegisterationComponent,
    CarComponent,
    EmployTableComponent,
    VehicleComponent,
    AccountsComponent,
    PhotoesComponent,
    FlipkartComponent,
    MailComponent,
    ActivityComponent,
    StudentsComponent,
    VehicleCarsComponent,
    CreateAccountComponent,
    CreateStudentComponent,
    CreateUserComponent,
    OnlineAccountComponent,
    StudentFormsComponent,
    ProductFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
