import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AccesoSesionComponent } from '../components/AccesoSesion.component';
import { RegistroComponent } from '../components/Registro.component';
import { CrearUsuarioComponent } from '../components/CrearUsuario.component';
import { EditarUsuarioComponent } from '../components/EditarUsuario.component';
import { FichaUsuarioComponent } from '../components/FichaUsuario';

const routes: Routes = [
    { path: '/', component:  AppComponent},
    { path: '/Usuarios', component: AppComponent },
    { path: '/Inicio', component: AppComponent },
    { path: '/Usuarios/:usuarioId', component: FichaUsuarioComponent },
    { path: '/Registro', component: RegistroComponent },
    { path: '/AccesoSesion', component: AccesoSesionComponent },
    { path: '/CrearUsuario', component: CrearUsuarioComponent },
    { path: '/EditarUsuario', component: EditarUsuarioComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
