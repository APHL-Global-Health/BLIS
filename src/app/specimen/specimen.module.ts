import { NgModule } from '@angular/core';

import { ModalModule } from 'ngx-bootstrap/modal';
import { SpecimenComponent } from './specimen.component';
import { SpecimenRoutingModule } from './specimen-routing.module';

@NgModule({
  imports: [
    ModalModule.forRoot(),
   SpecimenRoutingModule
  ],
  declarations: [ SpecimenComponent ]
})
export class SpecimenModule { }
