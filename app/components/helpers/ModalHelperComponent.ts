import { ModalDirective } from 'ng2-bootstrap';
import { Component, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';
 
@Component({
  selector: 'resposta-web-modal',
  templateUrl: 'app/components/helpers/ModalHelperComponent.template.html'
})
export class ModalHelperComponent {
	
	@Input() public eventMissatge:Subject<string>;
	@ViewChild('autoShownModal') public autoShownModal:ModalDirective;	

	public isModalShown:boolean = true;	

	ngOnInit(){
		//Vinculem a una entrada d'info de l'objecte
		this.eventMissatge.subscribe(event => { console.log(event.toString()); } );		
	}

	ngOnDestroy() {   
    	this.eventMissatge.unsubscribe();
  	}

	public showModal(){
		//console.log(this.Missatge);
		this.autoShownModal.show();		
	}
	public hideModal(){
		this.isModalShown = false;
	}
	

}