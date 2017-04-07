import { Component, OnInit, Input } from '@angular/core';
import { FormulariAgenda } from './filtre.component';
import { DateHelper } from '../../helpers/DateHelper';

@Component({
    selector: 'calendari-agenda',    
    templateUrl: 'app/components/agenda/templates/calendari.template.html',
    providers: []
})
export class CalendariComponent implements OnInit {          

	//Entrem el SiteID per saber què carreguem
	@Input() public SiteID: number = 1;
    @Input() public Formulari : FormulariAgenda;
    public DH: DateHelper;
    public Calendari: Object;
	
    constructor() {
        this.DH = new DateHelper();
    }    
    
    ngOnInit(){
        //Carrego el llistat de dies dels tres propers mesos
        this.Calendari = this.DH.getArrayWeeksAndDaysForPrintCalendar(3,2017);
        
        
    }

}
//# sourceMappingURL=agenda.component.js.map