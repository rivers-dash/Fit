import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }

	title = 'Fit'

	@Input() name: String;

  ngOnInit() {
  }

	get absUrl() {
	 return window.location.href;
 }

}
