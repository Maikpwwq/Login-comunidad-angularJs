import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-EditarUsuario',
  templateUrl: './EditarUsuario.html',
  styleUrls: ['../main.css']
})

export class EditarUsuarioComponent implements OnInit {

  public nombre: string = 'ingrese su nombre';
  public email: string = 'registre una cuenta activa de email';
  public password: string = 'asigne una clave';

  constructor(private route: ActivatedRoute,) {

    console.log("Componente EditarUsuario creandose!")
  }

  ngOnInit():void {
    console.log("Componente EditarUsuario creado!")
  }

  setValue() {
    this.nombre = '';
  }

  ngOnChanges() {

  }

  onSubmit(fas: NgForm) {
    console.log(f.value);
  }

  editarUsuario = function(){
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

}
