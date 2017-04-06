import { Component, OnInit, Input, Output, EventEmitter, Injectable } from '@angular/core';
import { HttpService } from '../../helpers/httpService';
import { ErrorComponent } from '../../helpers/Modals/ErrorComponent';
import { MessageEmitter, MessageModel } from '../../helpers/AuxiliarObjects';
import { SelectModelClass } from '../../helpers/Selects/SelectModelClass';
import { Observable } from 'rxjs/Observable';
import { MissatgesService } from '../../helpers/Missatges/Missatges.service';


@Component({
    selector: 'filtre-agenda',    
    templateUrl: 'app/components/agenda/templates/filtre.template.html',
    providers: []
})
export class FiltreAgendaComponent implements OnInit {          

	//Entrem el SiteID per saber què carreguem
	@Input() public SiteID: number = 1;    
    @Output() public onFormulari : EventEmitter<FormulariAgenda>;
    
    public F : FormulariAgenda = new FormulariAgenda();
    

    public Text: String = "";  
	public MesosSelect: SelectModelClass[] = [];
	public OrdenacioSelect: Array<SelectModelClass> = [new SelectModelClass(1,'Data'), new SelectModelClass(2,'Espais')];
	public TagsSelect: SelectModelClass[] = [];
	private Dia: Date;	
    public Errors: MessageEmitter = new MessageEmitter();  
    public mascara : Array<string | RegExp>;
    public selectedData : Date = new Date();
    
    public datePickerConfig : Object = {    firstDayOfWeek: "mo", 
                                            calendarsAmount: "1", 
                                            format:"DD/MM/YYYY", 
                                            allowMultiSelect: false, 
                                            weekdayNames: {su: 'dg',mo: 'dl',tu: 'dt',we: 'dc',th: 'dj',fr: 'dv',sa: 'ds'}                                            
                                        }; 
    
    private burl = "http://www.casadecultura.eu/ajax";        
	
    constructor(private http: HttpService, private _MS: MissatgesService) {
        _MS.LlistatMissatgesSuccess.subscribe();
        _MS.LlistatMissatgesError.subscribe();
        this.onFormulari = new EventEmitter();
    }    
    
    ngOnInit(){        
        this.getFilterInfoFromServer();
        this.mascara =  ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];        
    }

    /**
    * Funció que retorna els cicles per a un select
    **/
    public getFilterInfoFromServer(): void{
    	let url = this.burl + '/agenda/getFilterInfo'; 
    	let parm = { idS: this.SiteID };
        let ajax = <Observable<FiltreAgendaModel>>this.http.post( url, parm ).map( r => r.json());
        ajax.subscribe(
            (r: FiltreAgendaModel) => { 
                this.Text = r.Text; 
                this.MesosSelect = <SelectModelClass[]> r.MesosSelect;                                
                this.OrdenacioSelect = <SelectModelClass[]> r.OrdenacioSelect;
                this.TagsSelect = <SelectModelClass[]> r.Tags;
                this.Dia = r.Dia;
            },                    
            (Resposta) => this._MS.addError("getFilterInfoFromServer", Resposta ) );

    }

    //Quan cliquem el botó de filtra, carreguem les dades i les enviem
    public onSubmitFiltra(){
        this.onFormulari.emit(this.F);
    }
    public setText(){}  
    public setMes($e : Number){ console.log("He rebut el valor" + $e); console.log($e); }
    public setOrdenacio(){}
    public setTags($e: SelectModelClass[], $tipus: String){        
        if($tipus == 'data'){
            this.F.TagsSelect = $e;
        }
    }
    public setDia(){}


}
//# sourceMappingURL=agenda.component.js.map
export interface FiltreAgendaModel {
    Text: String;  
	MesosSelect: SelectModelClass[];
	OrdenacioSelect: Array<SelectModelClass>;
	Tags: SelectModelClass[];
	Dia: Date;   

}

export class FormulariAgenda {
    public Text: String = "";  
	public MesosSelect: Number;
	public OrdenacioSelect: Number;
	public TagsSelect: SelectModelClass[];
	private Dia: String;    

    constructor(){
        this.Text = "";
        this.MesosSelect = 0;
        this.OrdenacioSelect = 0;
        this.TagsSelect = [];
        this.Dia = "";
    }

    public hasDia(){
        return (this.Dia.length > 0);
    }
    
}