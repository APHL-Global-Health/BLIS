import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { TestService } from './test.service';
import { TestsComponent } from './tests.component';
import { TestsRoutingModule } from './tests-routing.module';

@NgModule({
  imports: [
    ModalModule.forRoot(),
    TestsRoutingModule,
    HttpModule,
    CommonModule
  ],
  providers: [TestService],
  declarations: [ TestsComponent ]
})
export class TestsModule { }
