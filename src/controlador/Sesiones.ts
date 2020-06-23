import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Sesiones',
  template: '',
  templateUrl: '../index.html',
  //controller: 'Sesiones',
  //$routeConfig: [{path: './Sesiones.js', name: 'Sesiones', component: 'Sesiones'},],
  //styleUrls: ['../main.css']
})

export class SesionUsuario implements OnInit{

    public estaAutentificado: boolean = false;

    constructor(){
      console.log("Componente SesionUsuario creandose!")
    }

    ngOnInit():void {
      console.log("Componente SesionUsuario creada!")
    }

  public verificarAutentificacion(req, res, next) {
      if (req.this.estaAutentificado()) {
          return next();
      }
      res.redirect('/AccesoSesion');
  };

  public noVerificarAutentificacion(req, res, next) {
      if (!req.this.estaAutentificado()) {
          return next()
      }
      res.redirect('/inicio')
  };
}
