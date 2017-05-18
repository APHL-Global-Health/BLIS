import { NgModule } from '@angular/core';

import { ModalModule } from 'ngx-bootstrap/modal';
import { SpecimenRejectionComponent } from './specimenrejection.component';
import { SpecimenRejectionRoutingModule } from './specimenrejection-routing.module';

@NgModule({
  imports: [
    ModalModule.forRoot(),
   SpecimenRejectionRoutingModule
  ],
  declarations: [ SpecimenRejectionComponent ]
})
export class SpecimenRejectionModule { }
