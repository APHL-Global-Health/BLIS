import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrganismsComponent } from './organisms.component';

const routes: Routes = [
  {
    path: '',
    component: OrganismsComponent,
    data: {
      title: 'Organisms'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganismsRoutingModule {}