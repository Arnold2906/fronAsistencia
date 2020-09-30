import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegistroIngresoModel } from '../models/registroingreso.models';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private url = 'https://api-computacion-fisica.herokuapp.com/api/registrar';

  constructor(private http: HttpClient) { }

  registrarHorario(registroIngreso: RegistroIngresoModel ) {
    console.log("Pasó aquí");
    return this.http.post(this.url , registroIngreso);
  }

}
