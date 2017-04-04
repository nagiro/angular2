import { KeyValueClass } from '../helpers/KeyValue';
import { SelectHelperInterface } from '../helpers/Selects/SelectHelperComponent';
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