import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AccesoSesionComponent } from '../components/AccesoSesion.component';
import { RegistroComponent } from '../components/Registro.component';
import { CrearUsuarioComponent } from '../components/CrearUsuario.component';
import { EditarUsuarioComponent } from '../components/EditarUsuario.component';

@NgModule({
  declarations: [
    AppComponent,
    AccesoSesionComponent,
    RegistroComponent,
    CrearUsuarioComponent,
    EditarUsuarioComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
