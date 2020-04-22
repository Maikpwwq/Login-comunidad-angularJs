import {Component, OnInit} fron '@angular/core';

.component('Sesiones', {
  template: '<h2>Sesiones</h2><ng-outlet></ng-outlet>',
  templateUrl: 'inicio.html',
  controller: 'app',
  $routeConfig: [{path: './Sesiones.js', name: 'Sesiones', component: 'Sesiones'},]
});


export class SesionUsuario implement OnInit{

    constructor(){

    }

    ngOnInit(){

    }

    public function __construct(){
        session_start();
    }

    public function setUsuarioActual(usuario){
        lista.sesion.usuario = lista.usuario;
    }

    public function getUsuarioActual(){
        return lista.sesion.usuario;
    }

    public function cerrarSesion(){
        session_unset();
        session_destroy();
    }
}