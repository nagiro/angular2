import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormulariAgenda } from './filtre.component';
import { DateHelper, iTime } from '../../helpers/DateHelper';
import { HttpService } from '../../helpers/httpService';
import { Observable } from 'rxjs/Observable';
import { MissatgesService } from '../../helpers/Missatges/Missatges.service';

@Component({
    selector: 'calendari-agenda',    
    templateUrl: 'app/components/agenda/templates/calendari.template.html',
    providers: [HttpService]
})
export class CalendariComponent implements OnInit {          

	//Entrem el SiteID per saber què carreguem
	@Input() public SiteID: number = 1;
    @Input() public Formulari : FormulariAgenda;
    @Output() public onDiaEscollit: EventEmitter<DadesCalendari[]>;
    public Calendari: Object;

    public DH: DateHelper;
    
    private burl = "http://www.casadecultura.eu/ajax"; 
	
    constructor(private http: HttpService, private _MS: MissatgesService) {
        this.DH = new DateHelper();        
        _MS.LlistatMissatgesSuccess.subscribe();
        _MS.LlistatMissatgesError.subscribe();
        this.onDiaEscollit = new EventEmitter();
    }    
    
    ngOnInit(){
        //Carrego el llistat de dies dels tres propers mesos
        this.getData();
    }


    private getData(){
        let url = this.burl + '/agenda/getCalendarInfo';
        let parm = { idS: this.SiteID, Formulari: this.Formulari };
        let ajax = <Observable<DadesCalendari[]>>this.http.post( url, parm ).map( r => r.json());
        ajax.subscribe(
            ( R: DadesCalendari[] ) => {      
                console.log(R);           
                this.Calendari = this.getArrayWeeksAndDaysForPrintCalendar( this.Formulari.MesosSelect , 3 , R );                                
            },                    
            (Resposta) => this._MS.addError("getCalendarInfo", Resposta ) );
    }

    public getArrayWeeksAndDaysForPrintCalendar(monthYear: number, howManyMonths: number = 3, DC: DadesCalendari[]) {
        let DH = new DateHelper();
        let date = DH.fromSelectMonthToDate(monthYear);        

        let linies = [];        //Cada línia de la taula
        let MesActual = date.getMonth();
        let newDate = date;
        let DiesInicialsMes = 0;        

        //Aquí carreguem on han d'anar els números de totes les línies
        
        while( howManyMonths > 0){
            
            let LiniaMesActual = { L1:[], L2:[], L3:[], L4:[], L5:[], L6:[] };
            
            while ( MesActual == date.getMonth() ) 
            {
            
            //Mirem quin dia de la setmana és
            let DiaDeLaSetmana = date.getDay();
            let CapDeSetmana : String;
            let DadesDia = {};
            let DayData : DadesCalendari[] = [];
            if(DiaDeLaSetmana == 0) DiaDeLaSetmana = 7;
            
            //Si és el primer dia del mes, deixem lliures tants espais com faci falta
            if( date.getDate() == 1 ){
                DiesInicialsMes = (DiaDeLaSetmana - 2);
                DadesDia = {'dia': '', 'mes':'', 'class': 'Normal' , 'DayData': DayData };
                for(let i = DiaDeLaSetmana; i>1; i-- ) LiniaMesActual.L1.push( DadesDia );
            }
            
            //Calculem quina setmana li toca del mes
            let week = Math.floor( ( date.getDate() + DiesInicialsMes ) / 7 );  //Ens diu quina setmana és
            
            //Guardem les dades del dia i marquem l'estil
            CapDeSetmana = (DiaDeLaSetmana == 7 || DiaDeLaSetmana == 6)?"CapDeSetmana":"Normal";            
            DayData = this.CercaDadesDia(DC, date);
            DadesDia = {'dia': date.getDate(), 'mes':date.getMonth() , 'class': CapDeSetmana, 'DayData': DayData };            
            
            if( week == 0) { LiniaMesActual.L1.push( DadesDia ); }
            else if ( week == 1 ) { LiniaMesActual.L2.push( DadesDia ); }
            else if ( week == 2 ) { LiniaMesActual.L3.push( DadesDia ); }
            else if ( week == 3 ) { LiniaMesActual.L4.push( DadesDia ); }
            else if ( week == 4 ) { LiniaMesActual.L5.push( DadesDia ); }
            else if ( week == 5 ) { LiniaMesActual.L6.push( DadesDia ); }
            
            newDate = new Date( date.getFullYear(), date.getMonth(), date.getDate() + 1 );                    
            date = newDate;          

            }
            //Afegim una columna buida 
            linies.push(LiniaMesActual);
            MesActual = date.getMonth();
            howManyMonths = howManyMonths - 1;
        }
        
        return linies;  
    }  

    public showDay(DiaCalendari: DadesCalendari[]){
        this.onDiaEscollit.next(DiaCalendari);
    }

    //Busca a l'array si troba la data corresponent al dia
    private CercaDadesDia(DadesCalendari: DadesCalendari[], DiaACercar: Date ): DadesCalendari[]{
        let DH = new DateHelper();
        let DMYSQL = DH.convertDateToMysqlFormat(DiaACercar);        
        let LlistatActivitats : DadesCalendari[] = [];

        for( let Row of DadesCalendari ){            
            if( DMYSQL == Row.Dia ){ LlistatActivitats.push(Row); }            
        }        
        return LlistatActivitats;
    }

}
//# sourceMappingURL=agenda.component.js.map

export class DadesCalendari{
    Nom: String;
    Responsable: String; 
    HorarisID: number;
    Dia: String; 
    HoraInici: String; 
    HoraFi: String; 
    NomEspai: String;  
    
    public getHoraInici(){        
        return new iTime(this.HoraInici).getShort();
    }   
}
