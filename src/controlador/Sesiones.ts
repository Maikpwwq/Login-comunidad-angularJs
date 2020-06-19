import { Component, OnInit } from '@angular/core';

@Component('Sesiones', {
  controller: 'app-Sesiones',
  template: '<h2>Sesiones</h2><ng-outlet></ng-outlet>',
  templateUrl: '../index.html',
  $routeConfig: [{path: './Sesiones.js', name: 'Sesiones', component: 'Sesiones'},],
  styleUrls: ['../main.css']
})

export class SesionUsuario implements OnInit{

    constructor(){
      estaAutentificado: boolean = false;
      var lista = this
    }

    ngOnInit(){

    }


    public verificarAutentificacion(req, res, next) {
      if (req.this.estaAutentificado()) {
          return next();
      }
      res.redirect('./AccesoSesion');
  };

  public noVerificarAutentificacion(req, res, next) {
      if (!req.estaAutentificado()) {
          return next()
      }
      res.redirect('./inicio')
  };

    public __construct(){
        session_start();
    }

    public setUsuarioActual(usuario){
        lista.sesion.usuario = lista.usuario;
    }

    public getUsuarioActual(){
        return lista.sesion.usuario;
    }

    public cerrarSesion(){
        session_unset();
        session_destroy();
    }
}
