import {Component, OnInit, Input} from '@angular/core';
import { HttpService } from '../helpers/httpService';
import { Response } from '@angular/http';

import { SelectHelperComponent } from '../helpers/SelectHelperComponent';
import { CiclesSelectModel } from '../models/Cicles.model';
import { TipusSelectModel } from '../models/Tipus.model';
import { TipusModel } from '../models/Tipus.model';
import { CiclesModel } from '../models/Cicles.model';



@Component({
    selector: 'agenda-component',
    templateUrl: 'app/components/agenda/agenda.template.html',
    providers: [HttpService]
})
export class AgendaComponent implements OnInit {          

	//Entrem el SiteID per saber què carreguem
	@Input() public SiteID: number = 1;

	public CiclesSelect: CiclesSelectModel[];
	public FormatsSelect: TipusSelectModel[];

    constructor( private http : HttpService ) {        
		this.getCiclesToSelectFromServer();
		this.getFormatsToSelectFromServer();
    }    

    /**
    * Funció que retorna els cicles per a un select
    **/
    public getCiclesToSelectFromServer(){
    	let url = 'http://www.casadecultura.eu/ajax/agenda/getCicles'; 
    	let parm = {idS: this.SiteID};
    	this.http.post( url , parm ).subscribe( this.getCiclesToSelectFromServerOK, this.ShowError );
    	
    }
    public getCiclesToSelectFromServerOK( res: Response ){    	
    	let data1:CiclesModel[] = res.json();
    	let data2:CiclesSelectModel[] = data1.map( val => val.toSelect() );
    	this.CiclesSelect = data2;
    }


    /**
    * Funció que retorna els formats per a un select
    **/
    public getFormatsToSelectFromServer(){
    	let url = 'http://www.casadecultura.eu/ajax/agenda/getFormats'; 
    	let parm = { idS: this.SiteID, tipusNom: "form_act" };    	
    	this.http.post( url , parm ).subscribe( this.getFormatsToSelectFromServerOK, this.ShowError );				  			
    }
    public getFormatsToSelectFromServerOK( res: Response ){    	
    	let data1:TipusModel[] = res.json();
    	let data2:TipusSelectModel[] = data1.map( val => val.toSelect() );    	    	
    	this.FormatsSelect = data2;
    }
    

    private ShowError( E: Response){
    	console.log("Error (" + E.json().code + "): " + E.json().message );
    }





    ngOnInit(){}

}
//# sourceMappingURL=agenda.component.js.map