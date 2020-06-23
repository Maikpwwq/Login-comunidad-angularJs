import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AccesoSesionRespuesta } from 'src/components/interfaces/Interface'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private _http: HttpClient
  ) { }

  api_url: string = 'http://192.168.1.110';

  login(usuario:string, password:string): Observable<AccesoSesionRespuesta>{
    return this._http.post<AccesoSesionRespuesta>('${this.api.url/AccesoSesion}',{
       usuario: usuario,
       password: password,
    })
  }
}
