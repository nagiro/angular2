import { ModalDirective } from 'ng2-bootstrap';
import { Component, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { MessageEmitter, MessageModel } from '../AuxiliarObjects';
 
@Component({
  selector: 'modal-view',
  templateUrl: 'app/components/helpers/Modals/ModalComponent.template.html'
})
export class ModalComponent {
	
	@Input() public Missatge:MessageEmitter = new MessageEmitter();
	@ViewChild('autoShownModal') public autoShownModal: ModalDirective;		
	public text: MessageModel[];	//Text que es mostra al missatge

	public isModalShown:boolean = true;	

	ngOnInit(){
		//Vinculem a una entrada d'info de l'objecte
		this.Missatge.getSubject().subscribe( event => { this.showModalMessage( <MessageModel[]>event ); } );		
	}

	ngOnDestroy() {
    	this.Missatge.getSubject().unsubscribe();
  	}

	public showModalMessage( E: MessageModel[] ){
		this.text = E;				
		this.autoShownModal.show();
	}
	
	public hideModal(){
		this.isModalShown = false;
	}

}