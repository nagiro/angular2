import { ModalDirective } from 'ng2-bootstrap';
import { Component, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { MessageEmitter, MessageList, MessageModel } from './AuxiliarObjects';
 
@Component({
  selector: 'resposta-web-modal',
  templateUrl: 'app/components/helpers/ModalHelperComponent.template.html'
})
export class ModalHelperComponent {
	
	@Input() public E:MessageEmitter = new MessageEmitter();
	@ViewChild('autoShownModal') public autoShownModal:ModalDirective;	
	public text: string = "";

	public isModalShown:boolean = true;	

	ngOnInit(){
		//Vinculem a una entrada d'info de l'objecte
		this.E.MessageEmitter.subscribe( event => { this.showModalMessage( <MessageList>event ); } );		
	}

	ngOnDestroy() {
    	this.E.MessageEmitter.unsubscribe();
  	}

	public showModalMessage( E: MessageList ){
		//this.text = E.LlistatMessages;		
		this.autoShownModal.show();		
	}
	
	public hideModal(){
		this.isModalShown = false;
	}

}