import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../../helpers/httpService';
import { ErrorComponent } from '../../helpers/Modals/ErrorComponent';
import { MessageEmitter, MessageModel } from '../../helpers/AuxiliarObjects';
import { SelectModelClass } from '../../helpers/Selects/SelectModelClass';
import { Observable } from 'rxjs/Observable';


@Component({
    selector: 'filtre-agenda',    
    templateUrl: 'app/components/agenda/templates/filtre.template.html',
    providers: [HttpService]
})
export class FiltreAgendaComponent implements OnInit {          

	//Entrem el SiteID per saber què carreguem
	@Input() public SiteID: number = 1;
    public Text: String = "";  
	public MesosSelect: SelectModelClass[] = [];
	public OrdenacioSelect: Array<SelectModelClass> = [new SelectModelClass(1,'Data'), new SelectModelClass(2,'Espais')];
	public TagsSelect: SelectModelClass[] = [];
	private Dia: Date;	
    public Errors: MessageEmitter = new MessageEmitter();  
    
    private burl = "http://www.casadecultura.eu/ajax";        
	
    constructor(private http: HttpService) {}    
    
    ngOnInit(){        
        this.getFilterInfoFromServer();
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
            (Resposta) => this.Errors.throwErrorHttp( Resposta ) );
    }

    public onSubmitFiltra(){}
    public setText(){}  
    public setMes(){}
    public setOrdenacio(){}
    public setTags(){}
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