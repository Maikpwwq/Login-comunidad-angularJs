import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
//import { superagent } from '@superagent';
import { bcrypt }  from 'bcrypt';
import { verificarAutentificacion, noVerificarAutentificacion }  from '../controlador/Sesiones';
import {FichaUsuario} from './FichaUsuario'
import { Usuarios } from '../assets/Datos';
const {SesionUsuario} = require ('./controlador/Sesiones.ts');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: [HttpClientModule]
})

export class AppComponent implements OnInit {

  titulo: string = 'GestorUsuarios';
  public usuario: FichaUsuario = {
    nombre: 'ingrese su nombre',
    email: 'registre una cuenta activa de email',
    password: 'asigne su clave',
    password2: 'repita la clave anterior',
  }
  private $http = HttpClientModule;
  public id: string ;
  public usuarios = new FichaUsuario(Usuarios);
  public desactivado= false;
  const sesionUsuario = new SesionUsuario(passport);
  constructor(private route: ActivatedRoute,) {
    var gestorUsuarios = this;
    console.log("Componente GestorUsuarios creandose!")
  }

  ngOnInit():void {
    console.log("Componente GestorUsuarios creado!")
  }

  // this.$http.get('',{ headers: {}, params: {}, observe: {} }).subscribe ();
  // Publicar Pagina Usuarios
  //return $http.get('./components/AccesoSesion.html');
  this.$http.get('/', noVerificarAutentificacion, (req, res) => {
     res.render('/Usuarios')
  }).subscribe ();

  // usuarios
  this.$http.get('/Usuarios', verificarAutentificacion, (req, res) =>
     res.render('/Usuarios', {
     usuario: req.usuario
     })
  ).subscribe ();

  // Get uno
  this.$http.get('/Usuarios/:usuarioId', verificarAutentificacion, (req, res) => {
     res.render();
  }).subscribe ();

  // Creando uno
  this.$http.push('/Usuarios/:usuarioId', verificarAutentificacion, (req, res) => {
    res.render();
  }).subscribe ();

  // Actualizando uno
  this.$http.patch('/Usuarios/:usuarioId', (req, res) => {

  }).subscribe ();

  // Publicar Pagina AccesoSesion
  this.$http.get('/AccesoSesion', verificarAutentificacion, (req, res) => res.render('/AccesoSesion')).subscribe ();

  // Publicar Pagina Registro
  this.$http.get('/Registro', verificarAutentificacion, (req, res) => res.render('/Registro')).subscribe ();

  // Publicar Pagina CerrrarSesion
  this.$http.get('/CerrrarSesion', (req, res) => {
    req.CerrrarSesion();
    req.flash('success_msg', 'Su sesion ha cerrado');
    res.redirect('/AccesoSesion');
  }).subscribe ();

  // Registro publicar Formulario
  this.$http.post('/Registro', (req, res) => {
    const { name, email, password, password2 } = req.body;
    let errors = [];

    if (!name || !email || !password || !password2) {
      errors.push({ msg: 'Debes rellenar todos los campos' });
    }

    if (password != password2) {
      errors.push({ msg: 'Las claves no concuerdan' });
    }

    if (password.length < 6) {
      errors.push({ msg: 'La clave debe tener como minimo 6 caracteres' });
    }

    if (errors.length > 0) {
      res.render('/Registro', {
      errors,
      name,
      email,
      password,
      password2
    });
    } else {
         Usuario.findOne({ email: email }).then(usuario => {
          if (usuario) {
            errors.push({ msg: 'El correo ya existe' });
            res.render('/Registro', {
            errors,
            name,
            email,
            password,
            password2
          });
          } else {
            const newUsuario = new Usuario({
            name,
            email,
            password
            });

            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUsuario.password, salt, (err, hash) => {
                  if (err) throw err;
                    newUsuario.password = hash;
                    newUsuario
                    .save()
                    .then(usuario => {
                      req.flash(
                        'success_msg',
                        'Ahora estas registrado'
                      );
                      res.redirect('/AccesoSesion');
                    })
                    .catch(err => console.log(err));
                });
            });
          }
        });
    }
  }).subscribe (
    data => console.log(data),
    err => console.log(err),
    () => console.log('peticion finalizada')
  );

  // AccesoSesion publicar formulario
  this.$http.post('/AccesoSesion', (req, res, next) => {
    passport.authenticate('local', {
      successRedirect: '/usuarios',
      failureRedirect: '/AccesoSesion',
      failureFlash: true
    })(req, res, next);
  }).subscribe ();
}




