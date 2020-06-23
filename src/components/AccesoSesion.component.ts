import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {NgForm} from '@angular/forms';
import { SesionUsuario }  from '../controlador/Sesiones';
import {FichaUsuario} from './interfaces/Interface'
import { ApiService } from './services/api.service';
import { UsuarioService } from 'src/app/services/usuario.service';

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
  public estaAutentificado: boolean;
  public validarSesion = SesionUsuario;
  _api: ApiService;
  _usuario: UsuarioService;

  constructor(private route: ActivatedRoute,) {
    console.log("Componente AccesoSesion creandose!")

  }

  ngOnInit():void {
    console.log("Componente AccesoSesion creada!")
  }

  setValue() {

  }

  ngOnChanges(event) {
      const target = event.target;
      const value = target.value;
      const name = target.name;
      // El evento altera los datos guardados
      this.setState({
          [name]: value
      });
      console.log( 'Escribiendo ...');
  };
  }

  onSubmit(AccessForm: NgForm) {
    event.preventDefault();
    console.log(AccessForm.value);
    alert('Se envio correctamente su solicitud: ' + AccessForm.value);

    var form = new FormData(event.target);
    var newDate = new Date().toISOString();

    var Usuario = {
        'date': newDate,
        'nombre': form.get('nombre'),
        'email': form.get('email'),
        'clave': form.get('clave'),
    }

    this.$http.push(Usuario)
        .then(response => console.log(response))
        .catch(error=> console.log(error))
  }

  compararUsuario (nombre,password) {

    event.preventDefault();
    alert('Se envio correctamente su solicitud: ' + this.state.value);

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

    this._api.login(usuario, password).suscribe(response=>{
      if (response.success){
        this._usuario.usuario = response.usuario;
      }
    })
  };
}
/*
// validarSesion
    this.validarSesion.when(function(){
      if( this.estaAutentificado==true
         then
      ) else
    });
*/
