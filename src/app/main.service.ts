import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import "rxjs/add/operator/map";
const  httpOptions = { 
	headers : new HttpHeaders({
		"Content-Type" : " application/json"
	})
}
@Injectable()
export class MainService {

  constructor(
		private http : HttpClient
	) {

	 }

	 getResolvers(){
		 return this.http.get("http://localhost:3000/resolvers/list", httpOptions)
		 .map((res : any) => res.data);
	 }

	 createIncident(incident : any){
		 return this.http.post("http://localhost:3000/incidents/save", incident, httpOptions)
		 .map((res : any) => res.data);

	 }

	 listIncident(){
			return this.http.get("http://localhost:3000/incidents/list", httpOptions)
			.map((res : any) => res.data);
	 }
	 removeIncident(id : any){
		 console.log("errei", id);
			return this.http.post("http://localhost:3000/incidents/remove", {id}, httpOptions)
			.map((res : any) => res.data);
	 }
}
