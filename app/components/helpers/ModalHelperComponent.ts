import { ModalDirective } from 'ng2-bootstrap';
import { Component, Input, Output, ViewChild, EventEmitter } from '@angular/core';
 
@Component({
  selector: 'resposta-web-modal',
  templateUrl: 'app/components/helpers/ModalHelperComponent.template.html'
})
export class ModalHelperComponent {
	
	//@Input() public Missatge:EventEmitter<string> = new EventEmitter<string>();	
	@ViewChild('autoShownModal') public autoShownModal:ModalDirective;

	public isModalShown:boolean = true;	

	public showModal(){
		//console.log(this.Missatge);
		this.autoShownModal.show();		
	}
	public hideModal(){
		this.isModalShown = false;
	}

	public handleMissatgeEvent(E){
		console.log(E);
	}

}