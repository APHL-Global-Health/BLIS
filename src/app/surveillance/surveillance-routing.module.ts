import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SurveillanceComponent } from './surveillance.component';

const routes: Routes = [
  {
    path: '',
    component: SurveillanceComponent,
    data: {
      title: 'Surveillance'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SurveillanceRoutingModule {}