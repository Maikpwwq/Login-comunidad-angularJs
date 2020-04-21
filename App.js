const angular = require('angular');
var app = angular.module("app",[require('angular-route']);

app.config(function($routeProvider){
	$routeProvider
	
	.when("/usuarios",{
		templateUrl: "inicio.html",
		controller: "controlador"
	});
});

app.controller("controlador", function($scope){
    var lista = this;
    var n = 2;
    lista.usuarios = [
    {id:1,nombre:carlos,correo:carlos@gmail.com,clave:1234},
    {id:2,nombre:diana,correo:diana@gmail.com,clave:1234},
    {id:3,nombre:cesar,correo:cesar@gmail.com,clave:1234}];

    lista.agregarUsuario = function(){

        var usuario = new lista.usuario ({
         Nombre de usuario: lista.usuarios.nombre;
         Correo: lista.usuarios.email;
         Clave: lista.usuarios.password;
         Confirmar Clave: lista.usuarios.2password
        })
        
        
    if( Clave == Confirmar Clave 
       lista.usuario.push({
          id:n, nombre:, email:correo, password:clave
       })
    )

    };

    lista.compararUsuario = function(){
        var id= lista.usuarioSeleccionado;
        lista.usuarios.find(function(obj){
            return obj.id == id;
        })
    if(
   
    )
    Nombre de usuario: usuario;
        Correo: email;
        Clave: password;
        Confirmar Clave: 2password
    };

    lista.validarSesion = function(){
        Nombre de usuario: usuario;
        Correo: email;
        Clave: password;
        Confirmar Clave: 2password
    };

             
    lista.Enviar = ('Evento', (event) => {
  
        event.preventDefault(); 
        alert('Se envio correctamente su solicitud: ' + this.state.value);        
        
        var form = new FormData(event.target);
        var newDate = new Date().toISOString();

        var usuario = {                        
            'date': newDate,
            'email': form.get('email'),
            'clave': form.get('clave'),
        }

        this.push(usuario)
            .then(response => console.log(response))
            .catch(error=> console.log(error))
    });  


});




