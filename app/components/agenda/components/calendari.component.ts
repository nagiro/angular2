import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'calendari-agenda',    
    templateUrl: 'app/components/agenda/templates/calendari.template.html',
    providers: []
})
export class CalendariComponent implements OnInit {          

	//Entrem el SiteID per saber què carreguem
	@Input() public SiteID: number = 1;
	
    constructor() {}    
    
    ngOnInit(){
        
    }

}
//# sourceMappingURL=agenda.component.js.map