const fse = require ('fs-extra');
const http = require ('http');
const port = 3000;
const passport = require ('passport')
const cargarPassport = require ('./controlador/cargarPassport');

passport.initialize();
passport.session();

cargarPassport(passport.authenticate,{
  email : this.usuarios.find(usuario => usuario.email === email),
  id : this.usuarios.find(usuario => usuario.id === id),
  failureRedirect: '/AccesoSesion',
  successRedirect: '/Usuarios',
  failureFlash: true,
});

const server = http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type': 'text/html'});
    fse.readFile('index.html',(function(error,data){
   if (error) {
           res.writeHead(404);
           res.write('Error la ruta de archivo no se ha encontrado');
    } else {
        res.write(data);
    }
    res.end()
    }));
});

server.listen(port, (function(error){
   if (error) {
      console.log('algo salio mal', error)
   } else {
      console.log('el servidor esta escuchando el puerto'+ port)
   }
}));
