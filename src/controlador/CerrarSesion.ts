const SesionUsuario = require('./Sesiones.js');

sesionUsuario = new SesionUsuario.cerrarSesion();

header("location: ../index.js");
