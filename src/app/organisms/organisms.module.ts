import { NgModule } from '@angular/core';

import { ModalModule } from 'ngx-bootstrap/modal';
import { OrganismsComponent } from './organisms.component';
import { OrganismsRoutingModule } from './organisms-routing.module';

@NgModule({
  imports: [
    ModalModule.forRoot(),
   OrganismsRoutingModule
  ],
  declarations: [ OrganismsComponent ]
})
export class OrganismsModule { }
