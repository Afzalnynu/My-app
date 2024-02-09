import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactUsRoutingModule } from './contact-us-routing.module';
import { ContactCompanyComponent } from './contact-company/contact-company.component';
import { ContactCeoComponent } from './contact-ceo/contact-ceo.component';


@NgModule({
  declarations: [
    ContactCompanyComponent,
    ContactCeoComponent
  ],
  imports: [
    CommonModule,
    ContactUsRoutingModule
  ]
})
export class ContactUsModule { }
