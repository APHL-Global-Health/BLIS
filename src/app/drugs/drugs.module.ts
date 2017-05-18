import { NgModule } from '@angular/core';

import { ModalModule } from 'ngx-bootstrap/modal';
import { DrugsComponent } from './drugs.component';
import { DrugsRoutingModule } from './drugs-routing.module';

@NgModule({
  imports: [
    ModalModule.forRoot(),
   DrugsRoutingModule
  ],
  declarations: [ DrugsComponent ]
})
export class DrugsModule { }
