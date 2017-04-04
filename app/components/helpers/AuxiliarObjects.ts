import { Subject } from 'rxjs/Subject';
import { Response } from '@angular/http';

export class MessageEmitter {
	
	public MessageEmitter: Subject<MessageModel[]> = new Subject();  

  	constructor(){}
  		

	public throwErrorHttp( R: Response ){				
		if( R.status == 400 ){			
			let MEH = <MessageErrorHttp> R.json();			
			let Missatges: MessageModel[] = [new MessageModel(MEH.code,MEH.message)];			
			this.MessageEmitter.next( Missatges );
		} else {
			
			let Missatges: MessageModel[] = [new MessageModel(R.status, R.toString())];						
			this.MessageEmitter.next( Missatges );
		}		
		
	}

	public getSubject(){
		return this.MessageEmitter;
	}

}


export interface MessageErrorHttp {
	code: number;
	message: String;
}

export class MessageModel{

	public id: Number = 0;
	public text: String = "";	

	constructor(id: Number, text: String){
		this.id = id;
		this.text = text; 		
	}
	
}