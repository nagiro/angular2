import { Component, OnInit, Input } from '@angular/core';
import { FormulariAgenda } from './filtre.component';

@Component({
    selector: 'calendari-agenda',    
    templateUrl: 'app/components/agenda/templates/calendari.template.html',
    providers: []
})
export class CalendariComponent implements OnInit {          

	//Entrem el SiteID per saber què carreguem
	@Input() public SiteID: number = 1;
    @Input() public Formulari : FormulariAgenda;
	
    constructor() {}    
    
    ngOnInit(){
        
    }

}
//# sourceMappingURL=agenda.component.js.map