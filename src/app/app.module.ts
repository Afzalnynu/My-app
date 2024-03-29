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
import { ProductTableComponent } from './product-table/product-table.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ClientComponent } from './client/client.component';
import { ClientFormComponent } from './client-form/client-form.component';
import { AnimalsComponent } from './animals/animals.component';
import { SiblingsComponent } from './siblings/siblings.component';
import { Sibling1Component } from './sibling1/sibling1.component';
import { Sibling2Component } from './sibling2/sibling2.component';
import { RatingsComponent } from './ratings/ratings.component';
import { RatingsChildComponent } from './ratings-child/ratings-child.component';
import { TextareaComponent } from './textarea/textarea.component';
import { Calculater1Component } from './calculater1/calculater1.component';
import { InputComponent } from './input/input.component';
import { ButtonContainerComponent } from './button-container/button-container.component';
import { InputCalculaterComponent } from './input-calculater/input-calculater.component';
import { AboutUsModule } from './about-us/about-us.module';
import { CustompipePipe } from './custompipe.pipe';


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
    ProductFormComponent,
    ProductTableComponent,
    ParentComponent,
    ChildComponent,
    ClientComponent,
    ClientFormComponent,
    AnimalsComponent,
    SiblingsComponent,
    Sibling1Component,
    Sibling2Component,
    RatingsComponent,
    RatingsChildComponent,
    TextareaComponent,
    Calculater1Component,
    InputComponent,
    ButtonContainerComponent,
    InputCalculaterComponent,
    CustompipePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AboutUsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
