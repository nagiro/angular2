import { Component, OnInit, Input } from '@angular/core';
import { MessageEmitter, MessageModel } from '../../helpers/AuxiliarObjects';


@Component({
    selector: 'error-view',    
    template: '<modal-view [Missatge]="Error"></modal-view>',    
    providers: []
})
export class ErrorComponent implements OnInit {          

	//Entrem el SiteID per saber què carreguem
	@Input() public Error: MessageEmitter;
	
    constructor() {
        //this.Error = new MessageEmitter();
    }

    ngOnInit(){
        
    }

}
//# sourceMappingURL=agenda.component.js.map