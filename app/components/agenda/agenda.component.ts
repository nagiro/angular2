import {Component, OnInit} from '@angular/core';
import {SelectHelperComponent} from '../helpers/SelectHelperComponent';
import { AgendaDataService } from '../helpers/AgendaData.service';
import { CiclesSelectModel } from '../models/Cicles.model';

@Component({
    selector: 'agenda-component',
    templateUrl: 'app/components/agenda/agenda.template.html',
    providers: [AgendaDataService]
})
export class AgendaComponent implements OnInit {
    public cicles: CiclesSelectModel;
    public data: any;  
    private errorMessage: string = '';
  	private isLoading: boolean = true;  

    constructor(private ADS: AgendaDataService) {        
        this.ADS.getCiclesSelect().subscribe(val => this.cicles = val);
        console.log(this.cicles);
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