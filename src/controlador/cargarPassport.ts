import { LocalStrategy } from 'passport-strategy';
// const  LocalStrategy = require ('passport-local').Strategy;
import { bcrypt } from 'bcrypt';
// Cargar Modelo de Usuario
import { Usuarios } from "../assets/Datos";

module.exports = function(passport) {
  passport.use(
    new LocalStrategy({
      usernameField: 'email',
      passwordField: 'password'
  }, async (email, password, done) => {
      // Comparar usuario sistema await
      const usuario= await Usuarios.findOne({
        email: email
      })
        if (!usuario) {
          return done(null, false, { message: 'La cuenta de correo no esta registrada' });
        } else {

        // Comparar Clave sistema
        bcrypt.compare(password, usuario.password, (err, isMatch) => {
          if (err) throw err;
          if (isMatch) {
            return done(null, usuario);
          } else {
            return done(null, false, { message: 'Clave Incorrecta' });
          }
        });
      };
    })
  );

  passport.serializeUser(function(usuario, done) {
    done(null, usuario.id);
  });

  passport.deserializeUser(function(id, done) {
    Usuarios.findById(id, function(err, usuario) {
      done(err, usuario);
    });
  });

  passport.logout = (req, res) =>{
    req.logout();
    req.flash('Has cerrado sesion')
    res.redirect('/AccesoSession')
  }
};
