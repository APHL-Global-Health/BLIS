import { NgModule } from '@angular/core';

import { ModalModule } from 'ngx-bootstrap/modal';
import { TestCategoryComponent } from './testcategory.component';
import { TestCategoryRoutingModule } from './testcategory-routing.module';

@NgModule({
  imports: [
    ModalModule.forRoot(),
   TestCategoryRoutingModule
  ],
  declarations: [ TestCategoryComponent ]
})
export class TestCategoryModule { }
