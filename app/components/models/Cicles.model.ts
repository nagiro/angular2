import { KeyValueClass } from '../helpers/KeyValue';
import { SelectHelperInterface } from '../helpers/SelectHelperComponent';

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

    public toSelect(): CiclesSelectModel { return new CiclesSelectModel( this ); }

}


export class CiclesSelectModel implements SelectHelperInterface {
    //El llistat és un array amb un ID i una descripció
    CicleID: number; 
    Nom: string; 
    id: number;
    text: string;

    // El puc construir a partir d'un JSON
   	constructor (Cicle: CiclesModel) {
   		this.CicleID = Cicle.CicleID;
   		this.Nom = Cicle.Nom;
   		this.id = Cicle.CicleID;
   		this.text = Cicle.Nom;
   	}           

}