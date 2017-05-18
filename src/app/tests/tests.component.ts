import { Component,ViewChild, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ModalDirective } from 'ngx-bootstrap/modal/modal.component';
import {TestService} from "./test.service";
import {Test} from "./test";

@Component({
selector:'tests',
  templateUrl: 'tests.component.html',
  providers: [TestService]
})

export class TestsComponent implements OnInit{

	test:Test[];
	errMesg: any;
	mode: 'Observable';

	constructor(private testService:TestService) { }
	public myModal;

	ngOnInit(){
	this.getTests()
	}

	getTests(){
		this.testService.getTests().subscribe(
			tests=>this.test=tests,
			error => this.errMesg = <any>error
		)
	}
	
}
