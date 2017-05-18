import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InterfacedEquipmentComponent } from './interfacedEquipment.component';

const routes: Routes = [
  {
    path: '',
    component: InterfacedEquipmentComponent,
    data: {
      title: 'Interfaced Equipment '
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterfacedEquipmentRoutingModule {}