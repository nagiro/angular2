import { Injectable, Input } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class HttpService {  

  constructor(private http: Http){

  }

  post( url: string, param: any): Observable<Response> {  	
  	return this.http.post( url , JSON.stringify(param) );    
  }
}