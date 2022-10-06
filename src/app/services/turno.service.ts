import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TurnoService {

  private urlEndPoint = 'http://localhost:8090/api';

  constructor(private http: HttpClient) { }

  public getListTurnos(): Observable<any> {
    console.log('SERV');
    return this.http.get(`${this.urlEndPoint}/turnos/turnos`).pipe(
      map((response: any) => {
        return response;
      }),
      catchError(e => {
        return e;
      })
    );
  }

  public getListComercio(): Observable<any> {
    console.log('SERV');
    return this.http.get(`${this.urlEndPoint}/comercios/comercios`).pipe(
      map((response: any) => {
        return response;
      }),
      catchError(e => {
        return e;
      })
    );
  }

  public getListServicios(): Observable<any> {
    console.log('SERV');
    return this.http.get(`${this.urlEndPoint}/servicios/servicios`).pipe(
      map((response: any) => {
        return response;
      }),
      catchError(e => {
        return e;
      })
    );
  }
}
