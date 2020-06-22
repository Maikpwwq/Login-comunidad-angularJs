import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {NgForm} from '@angular/forms';
import { SesionUsuario }  from '../controlador/Sesiones';
import {FichaUsuario} from './FichaUsuario'

@Component({
  selector: 'app-AccesoSesion',
  templateUrl: './AccesoSesion.html',
  styleUrls: ['../main.css']
})

export class AccesoSesionComponent implements OnInit {

  usuario: FichaUsuario = {
    nombre: 'ingrese su nombre',
    email: 'registre una cuenta activa de email',
    password: 'asigne su clave',
    password2: 'repita la clave anterior',
  }
  public id: string ;

  validarSesion : SesionUsuario = {
    estaAutentificado: false,
  }

  constructor(private route: ActivatedRoute,) {

    console.log("Componente AccesoSesion creandose!")
  }

  ngOnInit():void {
    console.log("Componente AccesoSesion creada!")

    this.validarSesion.when(function(){
      if( SesionUsuario==true
         then
      ) else
    });
  }

  setValue() {
    this.nombre = '';
  }

  ngOnChanges() {

  }

  onSubmit(AccessForm: NgForm) {
    console.log(AccessForm.value);
  }

  compararUsuario (nombre,password) {

    var credencial = new this.credencial ({
     nombre: 'usuario.nombre',
     password: 'usuario.password',
     id= 'usuario.usuarioSeleccionado',
    });

    this.usuarios.find(function(obj){
        return obj.id == credencial.id;
    });

    if( obj.id == null){
    res.status(404)
    return res.send('El Usuario no se ha encontrado')

    }
    return true;
  };
}
