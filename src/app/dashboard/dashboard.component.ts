import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	constructor() { }

	title = 'Fit'

	@Input() name: String;

	ngOnInit() {
	}

	get absUrl() {
	 return window.location.href;
	}

	}
