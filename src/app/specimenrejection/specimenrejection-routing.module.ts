import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpecimenRejectionComponent } from './specimenrejection.component';

const routes: Routes = [
  {
    path: '',
    component: SpecimenRejectionComponent,
    data: {
      title: 'Specimen Rejection'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpecimenRejectionRoutingModule {}