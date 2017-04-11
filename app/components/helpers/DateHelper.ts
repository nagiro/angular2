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
  
  public fromSelectMonthToDate( mmyyyy: number ): Date {
    let D = new Date();
    let Month = ( Math.floor( mmyyyy / 10000 ) );
    let Year = ( ( mmyyyy / 10000 ) - Month ) * 10000;                
    return new Date( Year, (Month - 1), 1);
  }

  public convertDateToMysqlFormat(D : Date): String {
    
    let dd = D.getDate();
    let mm = D.getMonth()+1; //January is 0!    
    let yyyy = D.getFullYear();
    let data : String; 

    if(dd<10) data = data + '0' + dd ; 
    if(mm<10) data = data + '/0' + mm ; 
    
    return  yyyy + '-' + ( ( (mm<10)?'0':'' ) + mm ) + '-' + ( ( (dd<10)?'0':'' ) + dd );    
  }


}


export class Time {
  
}

export class iTime {
  private H: string;
  private M: string;
  private S: string;

  constructor(D: String){    
    let A = D.split(":");
    this.H = A[0];
    this.M = A[1];
    this.S = A[2];
  }

  public getShort() : String {    
    return this.H + ":" + this.M;
  }
}