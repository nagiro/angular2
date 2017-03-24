import { Subject } from 'rxjs/Subject';

export class MessageEmitter {
	
	public MessageEmitter: Subject<MessageList> = new Subject();  

  	constructor(){}
  	
	public throwError( E : MessageList ){ 
		E.tipus = E.CONST_DANGER;
		this.MessageEmitter.next( E );
	 }
	public throwSuccess( E : MessageList ){
		E.tipus = E.CONST_SUCCESS;
		this.MessageEmitter.next( E );
	}

}

export class MessageList{
	LlistatMessages: MessageModel[] = [];
	public tipus : number; 
	public CONST_DANGER: number = 0;
	public CONST_SUCCESS: number = 1;
	public CONST_WARNING: number = 2;
	
	//Entra un objecte json 
	constructor( MM: any){
		this.tipus = this.CONST_WARNING;				
		if( MM instanceof String ){
			MM = new Array<MessageModel>();			
			MM.push(new MessageModel(0, <String>MM, MM.toString() ) );
			console.log(MM.toString());
		} else if ( MM instanceof Array ){
			
		}

		
	}
}

export class MessageModel{

	public id: Number = 0;
	public text: String = "";
	public description: String = "";	

	constructor(id: Number, text: String, description: String){
		this.id = id;
		this.text = text; 
		this.description = description;		
	}
	
}