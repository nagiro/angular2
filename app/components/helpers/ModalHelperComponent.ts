import { ModalDirective } from 'ng2-bootstrap';
import { Component, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { ErrorEmitter, ErrorList, ErrorModel } from './AuxiliarObjects';
 
@Component({
  selector: 'resposta-web-modal',
  templateUrl: 'app/components/helpers/ModalHelperComponent.template.html'
})
export class ModalHelperComponent {
	
	@Input() public E:ErrorEmitter = new ErrorEmitter();
	@ViewChild('autoShownModal') public autoShownModal:ModalDirective;	
	public text: string = "";

	public isModalShown:boolean = true;	

	ngOnInit(){
		//Vinculem a una entrada d'info de l'objecte
		this.E.ErrorEmitter.subscribe( event => { this.showModalError( <ErrorList>event ); } );		
	}

	ngOnDestroy() {
    	this.E.ErrorEmitter.unsubscribe();
  	}

	public showModalError( E: ErrorList ){
		this.text = E.LlistatErrors.toString();		
		console.log(E);
		this.autoShownModal.show();		
	}
	
	public hideModal(){
		this.isModalShown = false;
	}

}