import { Component, Input } from '@angular/core';
 
@Component({
  selector: 'single-select',
  templateUrl: 'app/components/helpers/SingleSelectHelper.template.html'
})
export class SelectHelperComponent {
  
  @Input() public placeholder: String; 
  @Input() public defaultValue: Number = 0;
  @Input() public items: Array<any>;

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
 
  public selected(value:any):void {
    console.log('Selected value is: ', value);
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