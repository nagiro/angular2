import { KeyValueClass } from '../helpers/KeyValue';
import { SelectHelperInterface } from '../helpers/SelectHelperComponent';
import { Response } from '@angular/http';

export class CiclesModel {
    CicleID: number;
    Nom: string; 
    Imatge: string;
    PDF: string; 
    tCurt: string; 
    tMig: string; 
    dMig: string; 
    tComplet: string; 
    dComplet: string; 
    extingit: number; 
    Visibleweb: number; 
    site_id: number; 
    actiu: number;  

}

export class CiclesSelectModel implements SelectHelperInterface {
    //El llistat és un array amb un ID i una descripció    
    id: number;
    text: string;

    // El puc construir a partir d'un JSON
   	constructor (Cicle: CiclesModel) {   		
   		this.id = Cicle.CicleID;
   		this.text = Cicle.Nom;
   	}           

}

/**
* Quan rebo una resposta del php. 
**/
export class CiclesArray {
  Llistat: CiclesModel[] = [];
  LlistatSelect: CiclesSelectModel[] = [];

  constructor( Llistat: Response){
    this.Llistat = Llistat.json();    
  }

  public getLlistatSelect():CiclesSelectModel[] {
    for( let tmp of this.Llistat ) this.LlistatSelect.push( new CiclesSelectModel(tmp) );    
    return this.LlistatSelect;
  }

  public getLlistat(): CiclesModel[]{
    return this.Llistat;
  }


}