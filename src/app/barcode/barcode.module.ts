import { NgModule } from '@angular/core';

import { ModalModule } from 'ngx-bootstrap/modal';
import { BarcodeComponent } from './barcode.component';
import { BarcodeRoutingModule } from './barcode-routing.module';

@NgModule({
  imports: [
    ModalModule.forRoot(),
   BarcodeRoutingModule
  ],
  declarations: [ BarcodeComponent ]
})
export class BarcodeModule { }
