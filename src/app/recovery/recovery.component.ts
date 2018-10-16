import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.component.html',
  styleUrls: ['./recovery.component.css']
})
export class RecoveryComponent implements OnInit {

	bodyImg: string = 'frontbody'

  constructor() { }

  ngOnInit() {
  }

	onFlipClick() {
		if (this.bodyImg == 'frontbody') {
			this.bodyImg = 'backbody'
		} else {
			this.bodyImg = 'frontbody'
		}
	}
}
