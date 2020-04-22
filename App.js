const {angular} = require('angular');
var app = angular.module("app",[require('angular-route']);
const {superagent} = require('superagent');
const {usuarios} = require ('./Datos.json');
const {HttpClientModule} = require('@angular/common/http');
const {NgModule} = require('@angular/core');
const {BrowserModule} = require('@angular/platform-browser');

@NgModule({
    imports:[
    BrowserModule,
    HttpClientModule
    ]
})

app.component({


}),

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

app.value('$routerRootComponent', 'app')

app.controller("controlador", function($scope){

    var lista = this;
    var lista.$http= HttpClientModule;

    var n = 4;
    lista.usuarios = [{usuarios}];

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

    if( obj.id == null){
        res.status(404)
        return res.send('El Usuario no se ha encontrado')

    }
        return true;
    )
    
    };

    lista.validarSesion.when(function(){
        if( SesionUsuario==true 
           then lista.
        ) else 
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
    superagent
      .post('/EditarUsuario')
      .send({ name: 'Manny', species: 'cat' }) // sends a JSON post body
      .set('X-API-Key', 'foobar')
      .set('accept', 'json')
      .end(function (err, res) {
        // Calling the end function will send the request
      });
    };

    lista.eliminarUsuario = function(){
        $http.delete()
    };
});




