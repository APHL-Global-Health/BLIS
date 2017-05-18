import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CriticalComponent } from './critical.component';

const routes: Routes = [
  {
    path: '',
    component: CriticalComponent,
    data: {
      title: 'Critical Values'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CriticalRoutingModule {}