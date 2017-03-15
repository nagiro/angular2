import { KeyValueClass } from '../helpers/KeyValue';
import { SelectHelperInterface } from '../helpers/SelectHelperComponent';

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