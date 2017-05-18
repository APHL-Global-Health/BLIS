import { NgModule } from '@angular/core';

import { ModalModule } from 'ngx-bootstrap/modal';
import { MicrobiologyComponent } from './microbiology.component';
import { MicrobiologyRoutingModule } from './microbiology-routing.module';

@NgModule({
  imports: [
    ModalModule.forRoot(),
   MicrobiologyRoutingModule
  ],
  declarations: [ MicrobiologyComponent ]
})
export class MicrobiologyModule { }
