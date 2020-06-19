import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { data } from '../assets/Datos';
import { HttpClientModule } from '@angular/common/http';
import { superagent } from '@superagent';
import { cargarPassport } from '../controlador/passport';
import { passport } from 'passport';
import { bcrypt }  from 'bcrypt';
import { noVerificarAutentificacion, verificarAutentificacion }  from '../controlador/Sesiones';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: [HttpClientModule]
})

export class AppComponent implements OnInit {

  titulo: string = 'GestorUsuarios';
  private $http = HttpClientModule;
  usuarios = [{data}];
  public id: string ;
  public nombre: string ;
  public email: string ;
  public password: string ;
  public password2: string ;
  public noVerificarAutentificacion: boolean;
  public verificarAutentificacion: boolean;
  desactivado= false;

  constructor(private route: ActivatedRoute,) {
    var gestorUsuarios = this;
    console.log("Componente GestorUsuarios creandose!")
    this.use(passport.initialize());

    this.Enviar = ('Evento', (event) => {

      event.preventDefault();
      alert('Se envio correctamente su solicitud: ' + this.state.value);

      var form = new FormData(event.target);
      var newDate = new Date().toISOString();

      var usuario = {
          'date': newDate,
          'nombre': form.get('nombre'),
          'email': form.get('email'),
          'clave': form.get('clave'),
      }

      this.$http.push(usuario)
          .then(response => console.log(response))
          .catch(error=> console.log(error))
    });
  }

  ngOnInit():void {
    console.log("Componente GestorUsuarios creado!")
  }

  cargarPassport(){
    passport,
    email : usuarios.find(usuario => usuario.email === email),
    id : usuarios.find(usuario => usuario.id === id)
  }

  // Publicar Pagina Usuarios
  this.$http.get('/', noVerificarAutentificacion, (req, res) => {
     res.render('/Usuarios')
  }).subscribe ();


  this.$http.get('',{ headers: {}, params: {}, observe: {} }).subscribe ();

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




