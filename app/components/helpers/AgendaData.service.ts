import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AgendaDataService{

	private baseUrl: string = 'http://www.casadecultura.eu/ajax/cicles/getCicles';

	constructor(private http : Http){}	

  	getCicles(): Observable<JSON> {
  		let Cicles = this.http.get(
  			`${this.baseUrl}`, {}
  			).map(mapCicles);
  		return Cicles;
  	};


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


  	function mapCicles(response: Response): JSON{
  		return response.json().map(toCicleSelect);
  	}

  	function toCicleSelect(r:any){
  		let cicle = JSON;
  		return '{"id":"'+r.CicleID+'", "text":"'+r.Nom+'"}'; 
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