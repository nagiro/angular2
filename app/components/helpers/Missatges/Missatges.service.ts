import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Subject }    from 'rxjs/Subject';
import { MessageModel } from '../AuxiliarObjects';

@Injectable()
export class MissatgesService {

  // Observable string sources
  private _LlistatMissatgesSuccess = new Subject<MessageModel>();
  private _LlistatMissatgesError = new Subject<MessageModel>();

  // Observable string streams
  LlistatMissatgesSuccess = this._LlistatMissatgesSuccess.asObservable();
  LlistatMissatgesError = this._LlistatMissatgesError.asObservable();
  
  // Service message commands
  public addSuccess( $M : MessageModel ){
    this._LlistatMissatgesSuccess.next($M);
  }

  // Service message commands
  public addError( $where : String, $M : any ){
    if($M instanceof Response){
      let E = "Error a (" + $where + "): " + $M.toString();
      if(!$M.ok) this._LlistatMissatgesError.next(new MessageModel($M.status, E ) );
    } else {
      this._LlistatMissatgesError.next($M);
    }
  }
  
}