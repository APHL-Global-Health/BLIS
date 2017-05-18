import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpecimenComponent } from './specimen.component';

const routes: Routes = [
  {
    path: '',
    component: SpecimenComponent,
    data: {
      title: 'Specimen'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpecimenRoutingModule {}