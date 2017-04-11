import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../../helpers/httpService';
import { Response } from '@angular/http';

import { TipusModel, TipusSelectModel, TipusArray } from '../../models/Tipus.model';
import { CiclesModel } from '../../models/Cicles.model';
import { ActivitatsSelectModel, ActivitatsModel, ActivitatsArray } from '../../models/Activitats.model';
import { HorarisSelectModel, HorarisModel, HorarisArray } from '../../models/Horaris.model';
import { DadesCalendari } from './calendari.component';

import { SelectHelperComponent, SiNoSelectHelper } from '../../helpers/Selects/SelectHelperComponent';
import { ErrorComponent } from '../../helpers/Modals/ErrorComponent';
import { MessageEmitter, MessageModel } from '../../helpers/AuxiliarObjects';
import { MissatgesService } from '../../helpers/Missatges/Missatges.service';
import { FormulariAgenda } from './filtre.component';



@Component({
    selector: 'agenda-component',    
    templateUrl: 'app/components/agenda/templates/agenda.template.html',
    providers: [MissatgesService, HttpService]
})
export class AgendaComponent implements OnInit {          

	//Entrem el SiteID per saber què carreguem
	@Input() public SiteID: number = 1;

    public Missatges: MessageModel[] = [];      
    public DiaEscollit: DadesCalendari[];

    private FormulariAgenda : FormulariAgenda;    
    private ActivitatID : number;    
	
    constructor(private http: HttpService, private _MS : MissatgesService) {
        _MS.LlistatMissatgesSuccess.subscribe();
        _MS.LlistatMissatgesError.subscribe();    
        this.FormulariAgenda = new FormulariAgenda();
        this.DiaEscollit = [];
        
    }    
    
    ngOnInit(){}

    public updateData(F : FormulariAgenda){
        this.FormulariAgenda = F;        
    }

    public onDiaEscollit( D: DadesCalendari[] ){        
        this.DiaEscollit = D;               
    }

    public editActivitat( id: number ){
        this.ActivitatID = id;
    }

}
//# sourceMappingURL=agenda.component.js.map