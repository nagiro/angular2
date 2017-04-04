import { SelectHelperInterface } from './SelectHelperComponent';


export class SelectModelClass implements SelectHelperInterface {
    //El llistat és un array amb un ID i una descripció    
    id: number;
    text: string;

    // El puc construir a partir d'un JSON
   	constructor (id: number, text: string) {   		
   		this.id = id;
   		this.text = text;
   	}

}
