import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BarcodeComponent } from './barcode.component';

const routes: Routes = [
  {
    path: '',
    component: BarcodeComponent,
    data: {
      title: 'Barcode Settings'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BarcodeRoutingModule {}