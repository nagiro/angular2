import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../../helpers/httpService';
import { Response } from '@angular/http';

import { TipusModel, TipusSelectModel, TipusArray } from '../../models/Tipus.model';
import { CiclesModel } from '../../models/Cicles.model';
import { ActivitatsSelectModel, ActivitatsModel, ActivitatsArray } from '../../models/Activitats.model';
import { HorarisSelectModel, HorarisModel, HorarisArray } from '../../models/Horaris.model';

import { SelectHelperComponent, SiNoSelectHelper } from '../../helpers/Selects/SelectHelperComponent';
import { ErrorComponent } from '../../helpers/Modals/ErrorComponent';
import { MessageEmitter, MessageModel } from '../../helpers/AuxiliarObjects';


@Component({
    selector: 'agenda-component',    
    templateUrl: 'app/components/agenda/templates/agenda.template.html',
    providers: [HttpService]
})
export class AgendaComponent implements OnInit {          

	//Entrem el SiteID per saber què carreguem
	@Input() public SiteID: number = 1;

    public Errors: MessageEmitter = new MessageEmitter();  
	
    constructor() {}    
    
    ngOnInit(){
        
    }

}
//# sourceMappingURL=agenda.component.js.map