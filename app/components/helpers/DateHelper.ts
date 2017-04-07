export class DateHelper {
  public date: Date;
  public any: number;
  public mes: number;
  public dia: number;    

  constructor() {}

  public getDate(){  }
  public setDate(dia: Date){ this.date = dia; }
  public getDateBDD(){}
  public setDateBDD(){}
  public getArrayWeeksAndDaysForPrintCalendar(month: number, year: number, howManyMonths: number = 2) {
    let date = new Date(year, month, 1);
    let linies = { L1:[], L2:[], L3:[], L4:[], L5:[], L6:[] };        //Cada línia de la taula
    let MesActual = date.getMonth();
    let newDate = date;
    let DiesInicialsMes = 0;

    //Aquí carreguem on han d'anar els números de totes les línies
    
      while( howManyMonths > 0){        
        while ( MesActual == date.getMonth() ) {
          
          //Mirem quin dia de la setmana és
          let DiaDeLaSetmana = date.getDay();
          if(DiaDeLaSetmana == 0) DiaDeLaSetmana = 7;

          //Si és el primer dia del mes, deixem lliures tants espais com faci falta
          if( date.getDate() == 1 ){
            DiesInicialsMes = (DiaDeLaSetmana - 2);
            for(let i = DiaDeLaSetmana; i>1; i-- ) linies.L1.push({dia:0,mes:date.getMonth()});
          }
          
          let week = Math.floor( ( date.getDate() + DiesInicialsMes ) / 7 );  //Ens diu quina setmana és
          
          if( week == 0) { linies.L1.push( {dia: date.getDate(), mes:date.getMonth()} ); }
          else if ( week == 1 ) { linies.L2.push( {dia: date.getDate(), mes:date.getMonth()} ); }
          else if ( week == 2 ) { linies.L3.push( {dia: date.getDate(), mes:date.getMonth()} ); }
          else if ( week == 3 ) { linies.L4.push( {dia: date.getDate() ,mes:date.getMonth()} ); }
          else if ( week == 4 ) { linies.L5.push( {dia: date.getDate() ,mes:date.getMonth()} ); }
          else if ( week == 5 ) { linies.L6.push( {dia: date.getDate(),mes:date.getMonth()} ); }
          
          newDate = new Date( date.getFullYear(), date.getMonth(), date.getDate() + 1 );                    
          date = newDate;          

        }
        //Afegim una columna buida 
        linies.L1.push({dia: -1, mes:date.getMonth()});
        linies.L2.push({dia: -1, mes:date.getMonth()});
        linies.L3.push({dia: -1, mes:date.getMonth()});
        linies.L4.push({dia: -1, mes:date.getMonth()});
        linies.L5.push({dia: -1, mes:date.getMonth()});
        linies.L6.push({dia: -1, mes:date.getMonth()});
        MesActual = date.getMonth();
        howManyMonths = howManyMonths - 1;
      }
      
      return linies;  
  }

}


export class Time {
  
}