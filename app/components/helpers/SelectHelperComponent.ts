import { Component, Input, Output, EventEmitter } from '@angular/core';
 
@Component({
  selector: 'single-select',
  templateUrl: 'app/components/helpers/SingleSelectHelper.template.html'
})
export class SelectHelperComponent {
  
  @Input() public placeholder: String; 
  @Input() public defaultValue: Number = 0;
  @Input() public items: SelectHelperInterface[] = [];
  @Output() public onChangeValue: EventEmitter<number> = new EventEmitter<number>();

  constructor(){
    
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


export interface SelectHelperInterface {
    id: number;
    text: string;
}