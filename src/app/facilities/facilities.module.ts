import { NgModule } from '@angular/core';

import { ModalModule } from 'ngx-bootstrap/modal';
import { FacilitiesComponent } from './facilities.component';
import { FacilitiesRoutingModule } from './facilities-routing.module';

@NgModule({
  imports: [
    ModalModule.forRoot(),
   FacilitiesRoutingModule
  ],
  declarations: [ FacilitiesComponent ]
})
export class FacilitiesModule { }
