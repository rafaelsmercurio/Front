import { Component, OnInit } from '@angular/core';
import { MainService } from './main.service';
import * as moment from "moment";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
	constructor(private mainService : MainService){
		
	}
	
	resolvers : any[] = []; 
	resolver : string = "";
	title : string = "";
	description : string ="";
	date : string ="";
	dates: any[] = [
		{value: moment().day('Monday').format('YYYY MM DD'), display: "Segunda-Feira"},
		{value: moment().day('Tuesday').format('YYYY MM DD'), display: "Terça-Feira"},
		{value: moment().day('Wednesday').format('YYYY MM DD'), display: "Quarta-Feira"},
		{value: moment().day('Thursday').format('YYYY MM DD'), display: "Quinta-Feira"},
		{value: moment().day('Friday').format('YYYY MM DD'), display: "Sexta-Feira"}
	];
	incidents : any[] = [];

	ngOnInit(): void {
		console.log(this.dates);
		this.updateData();
	}
	saveIncident(){
		console.log(this.resolver, this.title,
		this.description, this.date);
		let incident = {
			date : this.date,
			title : this.title,
			description : this.description,
			resolver :this.resolver
		};
		
		this.mainService.createIncident(incident).subscribe(data => console.log("data"));
		this.updateData();
	}
		removeIncident(_id){

			this.mainService.removeIncident(_id).subscribe(data => console.log("data", data));;
			this.updateData();
		}
		updateData(){
			this.mainService.getResolvers()
		.subscribe(data => this.resolvers = data);

		this.mainService.listIncident()
		.subscribe(data => this.incidents = data);
		}
}
