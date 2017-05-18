import { NgModule } from '@angular/core';

import { ModalModule } from 'ngx-bootstrap/modal';
import { InterfacedEquipmentComponent } from './interfacedEquipment.component';
import { InterfacedEquipmentRoutingModule } from './interfacedEquipment-routing.module';

@NgModule({
  imports: [
    ModalModule.forRoot(),
   InterfacedEquipmentRoutingModule
  ],
  declarations: [ InterfacedEquipmentComponent ]
})
export class InterfacedEquipmentModule { }
