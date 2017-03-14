import {Component, OnInit} from '@angular/core';

import { Injectable, Input } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import {SelectHelperComponent} from '../helpers/SelectHelperComponent';
import { CiclesSelectModel } from '../models/Cicles.model';
import { CiclesModel } from '../models/Cicles.model';



@Component({
    selector: 'agenda-component',
    templateUrl: 'app/components/agenda/agenda.template.html',
    providers: []
})
export class AgendaComponent implements OnInit {          

	public CiclesSelect: CiclesSelectModel[];

    constructor( private http : Http ) {        
		this.getCiclesToSelectFromServer();
    }    

    /**
    * Funció que retorna els cicles per a un select
    **/
    public getCiclesToSelectFromServer(){

    	this.http.get( 'http://www.casadecultura.eu/ajax/cicles/getCicles', {} )    					
  						.subscribe( (res: Response) => this.CiclesSelect = this.convertToCiclesSelect(<CiclesModel[]>res.json()) , 
  									this.ShowError ); 		
				  			
    }

    private convertToCiclesSelect(LlistatCicles: CiclesModel[]):CiclesSelectModel[]{    	
    	        	
    	var LlistatSelectCicles: CiclesSelectModel[] = [];

    	for (let Cicle of LlistatCicles) {    		
    		LlistatSelectCicles.push( new CiclesSelectModel(Cicle));    		
		}    	 

		return LlistatSelectCicles;
    }

    private ShowError(Error: Response){

    }


    ngOnInit(){}

}
//# sourceMappingURL=agenda.component.js.map