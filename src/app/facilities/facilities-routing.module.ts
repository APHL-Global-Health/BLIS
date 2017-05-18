import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FacilitiesComponent } from './facilities.component';

const routes: Routes = [
  {
    path: '',
    component: FacilitiesComponent,
    data: {
      title: 'Facilities'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacilitiesRoutingModule {}