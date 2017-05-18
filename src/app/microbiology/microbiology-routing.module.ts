import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MicrobiologyComponent } from './microbiology.component';

const routes: Routes = [
  {
    path: '',
    component: MicrobiologyComponent,
    data: {
      title: 'Microbiology Critical'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MicrobiologyRoutingModule {}