import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { AboutDirectorComponent } from './about-director/about-director.component';



@NgModule({
  declarations: [
    AboutCompanyComponent,
    AboutDirectorComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AboutCompanyComponent
  ]
})
export class AboutUsModule { }
