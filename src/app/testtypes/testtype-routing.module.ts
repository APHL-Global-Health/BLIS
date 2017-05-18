import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestTypeComponent } from './testtype.component';

const routes: Routes = [
  {
    path: '',
    component: TestTypeComponent,
    data: {
      title: 'Test Types'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestTypeRoutingModule {}