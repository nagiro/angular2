import { Component, Input, Output, EventEmitter } from '@angular/core';
 
export interface SelectHelperInterface {
    id: number;
    text: string;
}


/**
* Classe per crear un element d'una llista
**/
export class SelectValue implements SelectHelperInterface{
    id: number;
    text: string;

    // Entro un id i un text
    constructor (key: number, text: string) {       
       this.id = key;
       this.text = text;
     }           

}

/**
* COMPONENT PER CREAR UNA LLISTA DE SELECCIÓ SENZILLA
**/
@Component({
  selector: 'single-select',
  templateUrl: 'app/components/helpers/Selects/SingleSelectHelper.template.html'
})
export class SelectHelperComponent {
  
  @Input() public placeholder: String = ""; 
  @Input() public defaultValue: Array<SelectValue> = [];
  @Input() public items: SelectHelperInterface[] = [];
  @Output() public onChangeValue: EventEmitter<number> = new EventEmitter<number>();

  constructor(){      
    let E = new SelectValue(0,"---");    
    this.items.push(E);
    this.defaultValue.push(E);
  }

  private value:any = {};
  private _disabledV:string = '0';
  private disabled:boolean = false;   

  private get disabledV():string {
    return this._disabledV;
  }
 
  private set disabledV(value:string) {
    this._disabledV = value;
    this.disabled = this._disabledV === '1';
  }
 
  public selected(value:any) {
    console.log('Selected value is: ', value);
    this.onChangeValue.emit(value.id);
  }  
 
  public removed(value:any):void {
    console.log('Removed value is: ', value);
  }
 
  public typed(value:any):void {
    console.log('New search input: ', value);
  }
 
  public refreshValue(value:any):void {
    this.value = value;
  } 

}



/**
* COMPONENT PER CREAR UNA LLISTA DE SI I NO
**/
@Component({
  selector: 'single-sino-select',
  templateUrl: 'app/components/helpers/Selects/SingleSelectHelper.template.html'
})
export class SiNoSelectHelper extends SelectHelperComponent {

  constructor(){
    super();        
    this.items.push(new SelectValue(2,"No"));
    this.items.push(new SelectValue(1,"Sí"));
    this.defaultValue = [new SelectValue(2,"No")];    
  }
  
}