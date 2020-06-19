import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-AccesoSesion',
  templateUrl: './AccesoSesion.html',
  styleUrls: ['../main.css']
})

export class AccesoSesionComponent implements OnInit {

  public nombre: string = 'ingrese su nombre';
  public email: string = 'registre una cuenta activa de email';
  public password: string = 'ingrese su clave';

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

    var credencial = new lista.credencial ({
     nombre: nombre;
     password: lista.password;
     id= lista.usuarioSeleccionado
    });

    lista.usuarios.find(function(obj){
        return obj.id == credencial.id;
    });

    if( obj.id == null){
    res.status(404)
    return res.send('El Usuario no se ha encontrado')

    }
    return true;
  )
};
