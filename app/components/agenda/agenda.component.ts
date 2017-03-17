import {Component, OnInit, Input, EventEmitter} from '@angular/core';
import { HttpService } from '../helpers/httpService';
import { Response } from '@angular/http';

import { TipusModel, TipusSelectModel, TipusArray } from '../models/Tipus.model';
import { CiclesSelectModel, CiclesModel, CiclesArray } from '../models/Cicles.model';
import { ActivitatsSelectModel, ActivitatsModel, ActivitatsArray } from '../models/Activitats.model';
import { HorarisSelectModel, HorarisModel, HorarisArray } from '../models/Horaris.model';

import { SelectHelperComponent } from '../helpers/SelectHelperComponent';


@Component({
    selector: 'agenda-component',    
    templateUrl: 'app/components/agenda/agenda.template.html',
    providers: [HttpService]
})
export class AgendaComponent implements OnInit {          

	//Entrem el SiteID per saber què carreguem
	@Input() public SiteID: number = 1;

	private burl = "http://www.casadecultura.eu/ajax";
   
    public Activitat: ActivitatsModel;   
    public Horaris: HorarisModel; 

    public Tabs: boolean[];

    public CiclesSelect: CiclesSelectModel[];
	public FormatsSelect: TipusSelectModel[];    
    public EstatsSelect: TipusSelectModel[];    
   

    constructor( private http : HttpService ) {        		
        this.Tabs = [false, true, true];
        this.getCiclesToSelectFromServer();        
		this.getFormatsToSelectFromServer();
        this.Activitat = new ActivitatsModel();
    }    

    public setCicle($event: EventEmitter<number>){
        console.log($event);
    }

    /**
    * Funció que retorna els cicles per a un select
    **/
    public getCiclesToSelectFromServer(){
    	let url = this.burl + '/agenda/getCicles'; 
    	let parm = { idS: this.SiteID };
        this.http.post( url , parm ).subscribe( (r:Response) => this.getRes1(r), this.ShowError );     	
    }
    public getRes1(res: Response){        
        this.CiclesSelect = new CiclesArray(res).getLlistatSelect();                
    }    

    /**
    * Funció que retorna els formats per a un select
    **/
    public getFormatsToSelectFromServer(){
    	let url = this.burl + '/agenda/getFormats'; 
    	let parm = { idS: this.SiteID, tipusNom: "form_act" };    	
    	this.http.post( url , parm ).subscribe( 
            (r:Response) => this.FormatsSelect = new TipusArray(r).getLlistatSelect(),
            this.ShowError );		        
    }


    /**
    * Guardem l'activitat en si
    **/
    public onSubmitActivitatGeneral(){
        let url = this.burl + '/agenda/saveActivitat'; 
        let parm = { Activitat: this.Activitat, tipus: 1 };
        this.http.post( url , parm ).subscribe( 
            (r:Response) => this.FormatsSelect = new TipusArray(r).getLlistatSelect(),
            this.ShowError );                   
    }

    private ShowError( E: Response){
    	console.log("Error (" + E.json().code + "): " + E.json().message );
    }


    ngOnInit(){}

}
//# sourceMappingURL=agenda.component.js.map