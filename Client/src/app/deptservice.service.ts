import { Injectable } from '@angular/core';
import { Idept } from './idept';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { HttpHeaderResponse } from '@angular/common/http';
import {catchError, throwError} from 'rxjs'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DeptserviceService {
  url='http://localhost:20811/api/dept'
  httpOptions={headers:new HttpHeaders({'Content-type':'application/json'})}
  constructor(private httpclient:HttpClient) { }

  getDeptList():Observable<any>{
    return this.httpclient.get<any[]>(this.url+'/listdept').pipe(catchError(this.handleError))
  }
  getDept (id:number):Observable<Idept>{
    return this.httpclient.get<Idept>(this.url+'/ListDept/'+id).pipe(catchError(this.handleError))
  }
  addDept(deptdata:Idept):Observable<Idept>
  {
    return this.httpclient.post<Idept>(this.url+'/adddept',deptdata,this.httpOptions).pipe(catchError(this.handleError))
  }
  editDept(deptdata:Idept):Observable<Idept>{
    return this.httpclient.put<Idept>(this.url+'/editdept/'+deptdata.id,deptdata,this.httpOptions).pipe(catchError(this.handleError))
  }
  showdeptinfo():Observable<any>{
    return this.httpclient.get<any[]>(this.url+'/showdept').pipe(catchError(this.handleError))
  }
  handleError(error:HttpErrorResponse){
    let errormessage=''
    errormessage=error.status+'\n'+error.statusText+'\n'+error.error
    alert(errormessage)
    return throwError(errormessage)
  }
}
