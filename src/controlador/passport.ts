import { LocalStrategy } from 'passport-strategy';
import { bcrypt } from 'bcrypt';

// Cargar Modelo de Usuario
import { Usuario } from '../assets/Datos';

module.exports = function(passport) {
  passport.use(
    new LocalStrategy({ usuarionameField: 'email' }, (email, password, done) => {
      // Comparar usuario sistema
      Usuario.findOne({
        email: email
      }).then(usuario => {
        if (!usuario) {
          return done(null, false, { message: 'La cuenta de correo no esta registrada' });
        }

        // Comparar Clave sistema
        bcrypt.compare(password, usuario.password, (err, isMatch) => {
          if (err) throw err;
          if (isMatch) {
            return done(null, usuario);
          } else {
            return done(null, false, { message: 'Clave Incorrecta' });
          }
        });
      });
    })
  );

  passport.serializeusuario(function(usuario, done) {
    done(null, usuario.id);
  });

  passport.deserializeusuario(function(id, done) {
    Usuario.findById(id, function(err, usuario) {
      done(err, usuario);
    });
  });
};
