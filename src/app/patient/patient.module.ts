import { NgModule } from '@angular/core';

import { ModalModule } from 'ngx-bootstrap/modal';
import { PatientComponent } from './patient.component';
import { PatientRoutingModule } from './patient-routing.module';

@NgModule({
  imports: [
    ModalModule.forRoot(),
    PatientRoutingModule
  ],
  declarations: [ PatientComponent ]
})
export class PatientModule { }
