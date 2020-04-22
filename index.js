const {angular} = require('angular');
const {PerfilUsuario} = require ('./PerfilUsuario.php');
const {SesionUsuario} = require ('./Sesiones.php');

const fse = require ('fs-extra');
const http = require ('http');
const port = 3000;

const server = http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type': 'text/html'});
    fse.readFile('inicio.html',(function(error,data){
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

var sesionUsuario = new SesionUsuario();
var usuario = new Usuario();

if(isset(lista.sesion.usuario)){
    //echo "hay una sesion activa";
    usuario= setUsuario(sesionUsuario=getUsuarioActual());
    return $http.get('./inicio.html'));

}else if(isset($_POST['nombre']) && isset($_POST['password'])){
    
    var userForm = lista.nombre;
    var passForm = lista.password;

    usuario = new Usuario();
    if(usuario!="", userExists(userForm, passForm)){
        //echo "Existe el usuario";
        sesionUsuario= setUsuarioActual(userForm);
        usuario= setUsuario(userForm);

        return $http.get('./inicio.html'));
    }else{
        //echo "No existe el usuario";
        errorLogin = "Nombre de usuario y/o password incorrecto";
        return './AccesoSesion.html';
    }
}else{
    //echo "Accede primero";
    return $http.get('./AccesoSesion.html'));
}