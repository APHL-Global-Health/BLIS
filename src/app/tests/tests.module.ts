import { NgModule } from '@angular/core';

import { ModalModule } from 'ngx-bootstrap/modal';
import { TestsComponent } from './tests.component';
import { TestsRoutingModule } from './tests-routing.module';

@NgModule({
  imports: [
    ModalModule.forRoot(),
    TestsRoutingModule
  ],
  declarations: [ TestsComponent ]
})
export class TestsModule { }
