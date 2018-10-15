import { Component, Input, OnInit } from "@angular/core";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

/**
 * @title SVG icons
 */
@Component({
  selector: 'icon-component',
  templateUrl: 'icon.component.html',
  styleUrls: ['icon.component.css'],
})

export class IconComponent implements OnInit {

	@Input() label: string;
	@Input() iconName: string;

	constructor(
		private matIconRegistry: MatIconRegistry,
		private domSanitizer: DomSanitizer
	){
  }

	ngOnInit() {
		this.matIconRegistry.addSvgIcon(
      this.iconName,
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/"+ this.iconName + ".svg")
    );
	}

}
