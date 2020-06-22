import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SesionUsuario }  from '../controlador/Sesiones';
import {FichaUsuario} from './FichaUsuario'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-EditarUsuario',
  templateUrl: './EditarUsuario.html',
  styleUrls: ['../main.css']
})

export class EditarUsuarioComponent implements OnInit {

  usuario: FichaUsuario = {
    nombre: 'ingrese su nombre',
    email: 'registre una cuenta activa de email',
    password: 'asigne su clave',
    password2: '',
  }

  constructor(private route: ActivatedRoute,) {

    console.log("Componente EditarUsuario creandose!")
  }

  ngOnInit():void {
    console.log("Componente EditarUsuario creado!")
  }

  setValue() {
  }

  ngOnChanges() {
  }

  onSubmit(fas: NgForm) {
    console.log(f.value);
  }

  editarUsuario = function(){
    superagent
      .post('/EditarUsuario')
      .send({ name: 'Manny', species: 'cat' }) // sends a JSON post body
      .set('X-API-Key', 'foobar')
      .set('accept', 'json')
      .end(function (err, res) {
        // Calling the end function will send the request
      });
  };

  eliminarUsuario = function(){
      this.$http.delete()
  };
}
