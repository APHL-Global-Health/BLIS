import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestCategoryComponent } from './testcategory.component';

const routes: Routes = [
  {
    path: '',
    component: TestCategoryComponent,
    data: {
      title: 'Lab Sections'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestCategoryRoutingModule {}