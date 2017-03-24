import { Subject } from 'rxjs/Subject';

export class ErrorEmitter {
	
	public ErrorEmitter: Subject<ErrorList> = new Subject();  

  	constructor(){}
  	
	public throwError( E : ErrorList ){ 
		E.tipus = E.CONST_DANGER;
		this.ErrorEmitter.next( E );
	 }
	public throwSuccess( E : ErrorList ){
		E.tipus = E.CONST_SUCCESS;
		this.ErrorEmitter.next( E );
	}

}

export class ErrorList{
	LlistatErrors: ErrorModel[] = [];
	public tipus : number; 
	public CONST_DANGER: number = 0;
	public CONST_SUCCESS: number = 1;
	public CONST_WARNING: number = 2;
	
	//Entra un objecte json 
	constructor(json: string){
		this.tipus = this.CONST_WARNING;
	}
}

export class ErrorModel{

	public id: number;
	public text: string;
	public description: string;	

	constructor(id:number, text: string, description: string){
		this.id = id;
		this.text = text; 
		this.description = description;		
	}
	
}