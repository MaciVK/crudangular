import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './global';
import { Departamento } from '../models/Departamento';
@Injectable()
export class DepartamentoService {
  private url: string;
  constructor(private _http: HttpClient) {
    this.url = Global.urldept;
  }
  getDepartamentos(): Observable<any> {
    var request = 'api/departamentos';
    return this._http.get(this.url + request);
  }
  insertarDepartamento(departamento: Departamento): Observable<any> {
    var request = 'api/departamentos';
    //Parseamos el objeto a JSON
    var departamentoJSON = JSON.stringify(departamento);
    //Para enviar info al servicio se realiza mediante cabeceras
    //Necesitamos el import para los headers (de common/http)
    var header = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.post(this.url + request, departamentoJSON, {
      headers: header,
    });
  }
  searchDepartamento(idDepartamento: string): Observable<any> {
    var request = 'api/departamentos/' + idDepartamento;
    return this._http.get(this.url + request);
  }
  updateDepartamento(departamento: Departamento): Observable<any> {
    let json = JSON.stringify(departamento);
    var header = new HttpHeaders().set('Content-Type', 'application/json');
    var request = 'api/departamentos';
    return this._http.put(this.url + request, json, { headers: header });
  }
  deleteDepartamento(idDepartamento: string): Observable<any> {
    var request = 'api/departamentos/' + idDepartamento;
    return this._http.delete(this.url + request);
  }
}
