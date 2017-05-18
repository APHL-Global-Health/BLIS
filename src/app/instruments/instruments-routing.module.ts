import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InstrumentComponent } from './instruments.component';

const routes: Routes = [
  {
    path: '',
    component: InstrumentComponent,
    data: {
      title: 'Instruments'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstrumentRoutingModule {}