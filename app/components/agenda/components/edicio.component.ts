import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../../helpers/httpService';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { TipusModel, TipusSelectModel, TipusArray } from '../../models/Tipus.model';
import { CiclesModel } from '../../models/Cicles.model';
import { ActivitatsModel } from '../../models/Activitats.model';
import { HorarisModel } from '../../models/Horaris.model';
import { SelectHelperInterface } from '../../helpers/Selects/SelectHelperComponent';

import { SelectHelperComponent, SiNoSelectHelper } from '../../helpers/Selects/SelectHelperComponent';
import { MessageEmitter, MessageModel } from '../../helpers/AuxiliarObjects';


@Component({
    selector: 'edita-activitat',    
    templateUrl: 'app/components/agenda/templates/activitatEdit.template.html',
    providers: [HttpService]
})
export class EditaActivitatComponent implements OnInit {          

	//Entrem el SiteID per saber què carreguem
	@Input() public SiteID: number = 1;

	private burl = "http://www.casadecultura.eu/ajax";
   
    public Activitat: ActivitatsModel;   
    public Horaris: HorarisModel; 

    public Tabs: boolean[];
    public Errors: MessageEmitter = new MessageEmitter();  

    CiclesSelect: SelectHelperInterface[];
	public FormatsSelect: SelectHelperInterface[];    
    public EstatsSelect: SelectHelperInterface[];    

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
    	let parm = { idS: this.SiteID, select: true };
        let R = <Observable<SelectHelperInterface[]>> this.http.post( url, parm ).map( R => R.json() );
        R.subscribe( 
            ( R ) => this.CiclesSelect = R, 
            ( R ) => this.Errors.throwErrorHttp( R ) );
    }    

    /**
    * Funció que retorna els formats per a un select
    **/
    public getFormatsToSelectFromServer(){
    	let url = this.burl + '/agenda/getFormats'; 
    	let parm = { idS: this.SiteID, tipusNom: "form_act" };
    	this.http.post( url , parm ).subscribe( 
            (r) => this.FormatsSelect = new TipusArray(r).getLlistatSelect(),
            (r) => this.Errors.throwErrorHttp( r ) );
    }


    /**
    * Guardem l'activitat en si
    **/
    public onSubmitActivitatGeneral(){                   
        
        let url = this.burl + '/agenda/saveActivitat'; 
        let parm = { Activitat: this.Activitat, tipus: 1, idS: this.SiteID };
        
        this.http.post( url , parm ).subscribe( 
            (r) => r = r ,
            (r) => this.Errors.throwErrorHttp( r ) );
    }

}
//# sourceMappingURL=agenda.component.js.map