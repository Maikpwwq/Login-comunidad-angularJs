import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SesionUsuario }  from '../controlador/Sesiones';
import {FichaUsuario} from './FichaUsuario'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-CrearUsuario',
  templateUrl: './CrearUsuario.html',
  styleUrls: ['../main.css']
})

export class CrearUsuarioComponent implements OnInit {

  usuario: FichaUsuario = {
    nombre: 'ingrese su nombre',
    email: 'registre una cuenta activa de email',
    password: 'asigne su clave',
    password2: 'repita la clave anterior',
  }

  constructor(private route: ActivatedRoute,) {

    console.log("Componente CrearUsuario creandose!")
  }

  ngOnInit():void {
    console.log("Componente CrearUsuario creado!")
  }

  setValue() {

  }

  ngOnChanges() {

  }

  onSubmit(fas: NgForm) {
    console.log(f.value);
  }
}
