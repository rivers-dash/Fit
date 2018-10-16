import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bodyprofile',
  templateUrl: './bodyprofile.component.html',
  styleUrls: ['./bodyprofile.component.css']
})
export class BodyprofileComponent implements OnInit {

	sexe: boolean = true
	gender: string = 'Male'
	weight = 80
	height = 175
	age = 33
	weightGoal = 62
	caloriesburnt = 314


  constructor() { }

  ngOnInit() {
  }

	onGenderClick() {
		console.log(this.gender, this.sexe)
		this.sexe = !this.sexe
		if (this.sexe)
			this.gender = 'Male'
		if (!this.sexe)
			this.gender = 'Female'
	}
}
