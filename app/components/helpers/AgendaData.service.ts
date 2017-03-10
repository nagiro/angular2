import { Injectable, Input } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { CiclesSelectModel } from '../models/Cicles.model';

@Injectable()
export class AgendaDataService{

	@Input() private URL: string = 'http://www.casadecultura.eu/ajax/cicles/getCicles';

	constructor(private http : Http){}	

  	getCiclesSelect(): Observable<CiclesSelectModel> {  
  		let tmp : any;
  		let tmp1 = this.http.get( this.URL, {} );  		
  		let tmp2 = tmp1.map(res => res = res.json());
  		let tmp3 = tmp2.map(this.toCicleSelect);
  							
  		let Cicles = tmp3;		
//  							.catch(this.handleError);
  		return Cicles;  		
  	};

  	private toCicleSelect(response: string):CiclesSelectModel{
  		let r = JSON.parse(response);  		
  		return new CiclesSelectModel(r.cicles);
  	}

  	private handleError(err: any, caught: any):any[]{
  		return [];
  	}


  /*
  get(id: number) : Person {
    return this.clone(PEOPLE.find(p => p.id === id));
  }
  save(person: Person){
    let originalPerson = PEOPLE.find(p => p.id === person.id);
    if (originalPerson) Object.assign(originalPerson, person);
    // saved muahahaha
  }

  private clone(object: any){
    // hack
    return JSON.parse(JSON.stringify(object));
  }
  */
}


  	

/*
  	function mapPersons(response:Response): Person[]{
   // The response of the API has a results
   // property with the actual results
   return response.json().results.map(toPerson)
	}

	function toPerson(r:any): Person{
	  let person = <Person>({
	    id: extractId(r),
	    url: r.url,
	    name: r.name,
	    weight: r.mass,
	    height: r.height,
	  });
	  console.log('Parsed person:', person);
	  return person;
	}

	// to avoid breaking the rest of our app
	// I extract the id from the person url
	function extractId(personData:any){
	 let extractedId = personData.url.replace('http://swapi.co/api/people/','').replace('/','');
	 return parseInt(extractedId);
	}

*/