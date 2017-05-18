import { NgModule } from '@angular/core';

import { ModalModule } from 'ngx-bootstrap/modal';
import { TestTypeComponent } from './testtype.component';
import { TestTypeRoutingModule } from './testtype-routing.module';

@NgModule({
  imports: [
    ModalModule.forRoot(),
   TestTypeRoutingModule
  ],
  declarations: [ TestTypeComponent ]
})
export class TestTypeModule { }
