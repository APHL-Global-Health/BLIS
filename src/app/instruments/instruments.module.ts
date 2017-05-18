import { NgModule } from '@angular/core';

import { ModalModule } from 'ngx-bootstrap/modal';
import { InstrumentComponent } from './instruments.component';
import { InstrumentRoutingModule } from './instruments-routing.module';

@NgModule({
  imports: [
    ModalModule.forRoot(),
   InstrumentRoutingModule
  ],
  declarations: [ InstrumentComponent ]
})
export class InstrumentModule { }
