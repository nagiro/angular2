import { KeyValueClass } from '../helpers/KeyValue';
import { SelectHelperInterface } from '../helpers/SelectHelperComponent';
import { Response } from '@angular/http';

export class TipusModel {
    idTipus: number;
    tipusNom: string; 
    tipusDesc: string;    
    site_id: number; 
    actiu: number;

    public toSelect(): TipusSelectModel { return new TipusSelectModel( this ); }

}

export class TipusSelectModel implements SelectHelperInterface {
    //El llistat és un array amb un ID i una descripció   
    id: number;
    text: string;

    // El puc construir a partir d'un JSON
   	constructor (Tipus: TipusModel) {   		
   		this.id = Tipus.idTipus;
   		this.text = Tipus.tipusDesc;
   	}              



}

/**
* Quan rebo una resposta del php. 
**/
export class TipusArray {
  Llistat: TipusModel[] = [];
  LlistatSelect: TipusSelectModel[] = [];

  constructor( Llistat: Response){
    this.Llistat = Llistat.json();    
  }

  public getLlistatSelect():TipusSelectModel[] {    
    for( let tmp of this.Llistat ) this.LlistatSelect.push( new TipusSelectModel(tmp) );    
    return this.LlistatSelect;
  }

  public getLlistat(): TipusModel[]{
    return this.Llistat;
  }


}