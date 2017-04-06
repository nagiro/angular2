import { Component, OnInit, Input } from '@angular/core';
import { MessageModel } from '../../helpers/AuxiliarObjects';
import { MissatgesService } from '../../helpers/Missatges/Missatges.service';


@Component({
    selector: 'missatges-view',    
    templateUrl: 'app/components/helpers/Missatges/Missatges.template.html',
    providers: []
})
export class MissatgesComponent implements OnInit {          

	//Entrem el SiteID per saber què carreguem
	@Input() public SiteID: number = 1;
    public MissatgesSuccess : MessageModel[] = [];    
    public MissatgesError : MessageModel[] = [];        
	
    //Carrego els missatges quan vagin arribant pel service
    constructor(_MS : MissatgesService) {
        _MS.LlistatMissatgesSuccess.subscribe( Missatge => { 
            this.MissatgesSuccess.push( Missatge );            
            setTimeout( () => { this.MissatgesSuccess = []; }, 10000 );
        });
        _MS.LlistatMissatgesError.subscribe( Missatge => { 
            this.MissatgesError.push( Missatge );                        
            setTimeout( () => { this.MissatgesError = []; }, 10000 );
        });
    }    
    
    ngOnInit(){
        
    }

}
//# sourceMappingURL=agenda.component.js.map