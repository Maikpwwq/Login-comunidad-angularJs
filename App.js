const angular = require('angular');
var app = angular.module("app",[require('angular-route']);
const superagent = require('superagent');

app.config(function($routeProvider){
	$routeProvider
	
	.when("/usuarios",{
		templateUrl: "inicio.html",
		controller: "controlador"
	});

	.when("/CrearUsuario",{
		templateUrl: "CrearUsuario.html",
		controller: "controlador"
	});

	.when("/EditarUsuario",{
		templateUrl: "EditarUsuario.html",
		controller: "controlador"
	});
});

app.controller("controlador", function($scope){
    var lista = this;
    var n = 4;
    lista.usuarios = [
    {id:1,nombre:carlos,correo:carlos@gmail.com,clave:1234},
    {id:2,nombre:diana,correo:diana@gmail.com,clave:1234},
    {id:3,nombre:cesar,correo:cesar@gmail.com,clave:1234}];

    lista.agregarUsuario = function(){

        var usuario = new lista.usuario ({
         nombreUsuario: lista.nombre;
         correo: lista.email;
         clave: lista.password;
         confirmarClave: lista.2password
        })
        
        
    if( clave == confirmarClave 
       n++,
       lista.usuario.push({
          id:n, nombre:nombreUsuario, email:correo, password:clave
       })
    )

    };

    lista.compararUsuario = function(nombre,password){

        var credencial = new lista.credencial ({
         nombreUsuario: lista.nombre;
         clave: lista.password;
         id= lista.usuarioSeleccionado
        });

        lista.usuarios.find(function(obj){
            return obj.id == credencial.id;
        });

    if(
        Nombre de usuario: lista.usuario.name;
        Correo: lista.usuario.email;
        Clave: lista.usuario.password;
    )
    
    };

    lista.validarSesion.when(function(){
        if( usuario!="" 
           then lista.
        )
    });

             
    lista.Enviar = ('Evento', (event) => {
  
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

        lista.push(usuario)
            .then(response => console.log(response))
            .catch(error=> console.log(error))
    });  

    lista.editarUsuario = function(){

    };

    lista.eliminarUsuario = function(){

    };
});




