import { NgModule } from '@angular/core';

import { ModalModule } from 'ngx-bootstrap/modal';
import { SurveillanceComponent } from './surveillance.component';
import { SurveillanceRoutingModule } from './surveillance-routing.module';

@NgModule({
  imports: [
    ModalModule.forRoot(),
   SurveillanceRoutingModule
  ],
  declarations: [ SurveillanceComponent ]
})
export class SurveillanceModule { }
