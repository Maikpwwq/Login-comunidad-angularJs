import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SesionUsuario }  from '../controlador/Sesiones';
import {FichaUsuario} from './interfaces/Interface'
import { bindNodeCallback } from 'rxjs';

@Component({
  selector: 'app-Registro',
  templateUrl: './Registro.html',
  styleUrls: ['../main.css']
})

export class RegistroComponent implements OnInit {

  public usuario: FichaUsuario = {
    nombre: 'ingrese su nombre',
    email: 'registre una cuenta activa de email',
    password: 'asigne su clave',
    password2: 'repita la clave anterior',
  }

  constructor(private route: ActivatedRoute,) {

    console.log("Componente Registro creandose!")
  }

  ngOnInit():void {
    console.log("Componente Registro creado!")
  }

  setValue() {

  }

  ngOnChanges() {

  }

  onSubmit(fas: NgForm) {
    console.log(f.value);
  }

  agregarUsuario () {

    var Usuario = new this.usuario ({
     nombreUsuario: 'usuario.nombre',
     correo: 'usuario.email',
     clave: 'usuario.password',
     confirmarClave: 'usuario.password2',
    })

    if( clave == confirmarClave
    n++,
      lista.usuario.push({
      id:n, nombre:nombreUsuario, email:correo, password:clave
    })
    )

  };


}
