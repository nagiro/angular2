import { KeyValueClass } from '../helpers/KeyValue';
import { DateHelper, Time } from '../helpers/DateHelper';
import { EspaisModel, EspaisExternsModel } from '../models/Espais.model';
import { SelectHelperInterface } from '../helpers/Selects/SelectHelperComponent';
import { Response } from '@angular/http';

export class HorarisModel {
	HorarisID: number;
	Activitats_ActivitatID: number;
	Dia: Date;
	HoraInici: Time;
	HoraFi: Time;
	HoraPre: Time;
	HoraPost: Time;
	Avis: string; 
	Espectadors: number;
	Places: number;
	Titol: string;
	Preu: number;
	PreuR: number;
	Estat: number;
	Responsable: string;
	site_id: number;
	actiu: number;
	isEntrada: number; 
	LlistatHorarisEspais: HorarisEspaisArray;

    constructor(){

    }
    

}

export class HorarisSelectModel implements SelectHelperInterface {
    //El llistat és un array amb un ID i una descripció    
    id: number;
    text: string;

    // El puc construir a partir d'un JSON
   	constructor (Horari: HorarisModel) {   		
   		this.id = Horari.HorarisID;
   		this.text = Horari.Dia.toString() + Horari.HoraInici.toString();
   	}           

}

/**
* Quan rebo una resposta del php. 
**/
export class HorarisArray {
  Llistat: HorarisModel[] = [];
  LlistatSelect: HorarisSelectModel[] = [];

  constructor( Llistat: Response){
    this.Llistat = Llistat.json();    
  }

  public getLlistatSelect():HorarisSelectModel[] {
    for( let tmp of this.Llistat ) this.LlistatSelect.push( new HorarisSelectModel(tmp) );    
    return this.LlistatSelect;
  }

  public getLlistat(): HorarisModel[]{
    return this.Llistat;
  }

}


export class HorarisEspaisModel {
	idHorarisEspais: number;
	Material_idMaterial: number; //Aquest deixarà de tenir sentit... passarà a ser un genèric	
	Espais_EspaiID: number;
	idEspaiextern: number;
	Horaris_HorarisID: number;
	site_id: number;
	actiu: number;		
	LlistatEspais: EspaisModel;
	LlistatEspaisExterns: EspaisExternsModel;
	
    constructor(){

    }
    
}

/**
* Quan rebo una resposta del php. 
**/
export class HorarisEspaisArray {
  Llistat: HorarisEspaisModel[] = [];  

  constructor( Llistat: Response){
    this.Llistat = Llistat.json();    
  }

  public getLlistat(): HorarisEspaisModel[]{
    return this.Llistat;
  }

}