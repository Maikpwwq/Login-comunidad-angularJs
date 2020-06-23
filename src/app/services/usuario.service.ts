import { Injectable } from '@angular/core';
import { Usuario } from 'src/components/interfaces/Interface';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  usuario: Usuario;
}
