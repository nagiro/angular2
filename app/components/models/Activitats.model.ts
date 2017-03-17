import { KeyValueClass } from '../helpers/KeyValue';
import { SelectHelperInterface } from '../helpers/SelectHelperComponent';
import { Response } from '@angular/http';

export class ActivitatsModel {
    ActivitatID: number = 0;
    Cicles_CicleID: number = 0;
    TipusActivitat_idTipusActivitat: number = 0;
    Nom: string = "";
    Preu : number = 0;
    PreuReduit : number = 0;
    Publicable : number = 0;
    Estat: string = "";
    Descripcio: string = "";
    Imatge: string = "";
    PDF: string = "";
    PublicaWEB : number = 0;
    tCurt: string = "";
    dCurt: string = "";
    tMig: string = "";
    dMig: string = "";
    tComplet: string = "";
    dComplet: string = "";
    tipusEnviament : number = 0;
    Organitzador: string = "";
    Categories: string = "";
    Responsable: string = "";
    InfoPractica: string = "";
    site_id : number = 0;
    actiu : number = 0;
    isEntrada : number = 0;
    Places : number = 0;
    isImportant : number = 0;

    constructor(){

    }

    public setNom(c:string){ this.Nom = c; }
    public setOrganitzador(c:string){ this.Organitzador = c; }
    public setResponsable(c:string){ this.Responsable = c; }

    public setCicle(c:number){ this.Cicles_CicleID = c; }
    public setFormat(c:number){ this.TipusActivitat_idTipusActivitat = c; }
    public setEstat(c:number){ this.Estat = String(c); }
    public setAvisarHospici(c:number){ this.isImportant = c; }

}

export class ActivitatsSelectModel implements SelectHelperInterface {
    //El llistat és un array amb un ID i una descripció    
    id: number;
    text: string;

    // El puc construir a partir d'un JSON
   	constructor (Activitat: ActivitatsModel) {   		
   		this.id = Activitat.ActivitatID;
   		this.text = Activitat.Nom;
   	}           

}

/**
* Quan rebo una resposta del php. 
**/
export class ActivitatsArray {
  Llistat: ActivitatsModel[] = [];
  LlistatSelect: ActivitatsSelectModel[] = [];

  constructor( Llistat: Response){
    this.Llistat = Llistat.json();    
  }

  public getLlistatSelect():ActivitatsSelectModel[] {
    for( let tmp of this.Llistat ) this.LlistatSelect.push( new ActivitatsSelectModel(tmp) );    
    return this.LlistatSelect;
  }

  public getLlistat(): ActivitatsModel[]{
    return this.Llistat;
  }


}