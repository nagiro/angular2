import { KeyValueClass } from '../helpers/KeyValue';
import { DateHelper } from '../helpers/DateHelper';
import { SelectHelperInterface } from '../helpers/Selects/SelectHelperComponent';
import { Response } from '@angular/http';

export class EspaisModel {
	EspaiID: number;
	Nom: string;
	Ordre: number;
	site_id: number;
	actiu: number;
	isLlogable: number;
	descripcio: string;	

    constructor(){

    }
   
}

export class EspaisSelectModel implements SelectHelperInterface {
    //El llistat és un array amb un ID i una descripció    
    id: number;
    text: string;

    // El puc construir a partir d'un JSON
   	constructor (Espai: EspaisModel) {   		
   		this.id = Espai.EspaiID;
   		this.text = Espai.Nom;
   	}           

}

/**
* Quan rebo una resposta del php. 
**/
export class EspaisArray {
  Llistat: EspaisModel[] = [];
  LlistatSelect: EspaisSelectModel[] = [];

  constructor( Llistat: Response){
    this.Llistat = Llistat.json();    
  }

  public getLlistatSelect(): EspaisSelectModel[] {
    for( let tmp of this.Llistat ) this.LlistatSelect.push( new EspaisSelectModel(tmp) );    
    return this.LlistatSelect;
  }

  public getLlistat(): EspaisModel[]{
    return this.Llistat;
  }
  
}



export class EspaisExternsModel {
	idEspaiextern: number;
	Poble: number;
	Nom: string;
	Adreca: string;
	Contacte: string;
	actiu: number;	

    constructor(){

    }
}
