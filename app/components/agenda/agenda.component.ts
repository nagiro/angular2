import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../helpers/httpService';
import { Response } from '@angular/http';

import { TipusModel, TipusSelectModel, TipusArray } from '../models/Tipus.model';
import { CiclesSelectModel, CiclesModel, CiclesArray } from '../models/Cicles.model';
import { ActivitatsSelectModel, ActivitatsModel, ActivitatsArray } from '../models/Activitats.model';
import { HorarisSelectModel, HorarisModel, HorarisArray } from '../models/Horaris.model';

import { SelectHelperComponent, SiNoSelectHelper } from '../helpers/SelectHelperComponent';
import { ModalHelperComponent } from '../helpers/ModalHelperComponent';
import { ErrorEmitter, ErrorList, ErrorModel } from '../helpers/AuxiliarObjects';


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
    public E: ErrorEmitter = new ErrorEmitter();  

    public CiclesSelect: CiclesSelectModel[];
	public FormatsSelect: TipusSelectModel[];    
    public EstatsSelect: TipusSelectModel[];    

    constructor( private http : HttpService ) {        		
        this.Tabs = [false, true, true];
        this.getCiclesToSelectFromServer();        
		this.getFormatsToSelectFromServer();
        this.Activitat = new ActivitatsModel();                        
    }    
    
    ngOnInit(){
        
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
        let parm = { Activitat: this.Activitat, tipus: 1, idS: this.SiteID };
        
        this.http.post( url , parm ).subscribe( 
            (r:Response) => this.E.throwError(new ErrorList( r.json() ) ),
            (r:Response) => this.E.throwError(new ErrorList( r.json() ) ));
    }

    private ShowError( E: Response){
    	console.log("Error (" + E.json().code + "): " + E.json().message );
    }


}
//# sourceMappingURL=agenda.component.js.map