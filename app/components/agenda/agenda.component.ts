import {Component, OnInit} from '@angular/core';
import {SelectHelperComponent} from '../helpers/SelectHelperComponent';
import { AgendaDataService } from '../helpers/AgendaData.service';

@Component({
    selector: 'agenda-component',
    templateUrl: 'app/components/agenda/agenda.template.html',
    providers: [AgendaDataService]
})
export class AgendaComponent implements OnInit {
    public cicles: JSON;
    public data: any;  
    private errorMessage: string = '';
  	private isLoading: boolean = true;  

    constructor(private ADS: AgendaDataService) {
        var selfAgenda = this;                
        this.ADS.getCicles().subscribe(val => this.cicles = JSON.stringify(val));
    }    

    ngOnInit(){

//    	this.ADS.getCicles().subscribe(
//    		/* happy path */ p => this.cicles = p,
//	        /* error path */ e => this.errorMessage = e,
//         	/* onComplete */ () => this.isLoading = false);    	
//    	console.log(this.cicles);
	}

}
//# sourceMappingURL=agenda.component.js.map