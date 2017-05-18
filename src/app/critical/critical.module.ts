import { NgModule } from '@angular/core';

import { ModalModule } from 'ngx-bootstrap/modal';
import { CriticalComponent } from './critical.component';
import { CriticalRoutingModule } from './critical-routing.module';

@NgModule({
  imports: [
    ModalModule.forRoot(),
   CriticalRoutingModule
  ],
  declarations: [ CriticalComponent ]
})
export class CriticalModule { }
