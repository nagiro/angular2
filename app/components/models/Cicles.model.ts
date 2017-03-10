import { KeyValueClass } from '../helpers/KeyValue';

export class CiclesModel {
    CicleId: number;
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

export class CiclesSelectModel {
    //El llistat és un array amb un ID i una descripció
    llistat: Array<[number,string]>;

    // El puc construir a partir d'un JSON
    constructor (response: string) {
    	let r = JSON.parse(response);

    	console.log(r);
    }   

    public getSelect():Array<[number,string]>{
    	return this.llistat;
    }

    public getSelectJSON():string{
    	for(let c of this.llistat){

    	}
    	return "";
    }

    private ConvertInput(input: CiclesModel):[number,string]{    	        
    	return [ input.CicleId, input.Nom ];
    }

}