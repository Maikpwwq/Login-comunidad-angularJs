import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-Registro',
  templateUrl: './Registro.html',
  styleUrls: ['../main.css']
})

export class RegistroComponent implements OnInit {

  public nombre: string = 'ingrese su nombre';
  public email: string = 'registre una cuenta activa de email';
  public password: string = 'asigne su clave';
  public password2: string = 'repita la clave anterior';


  constructor(private route: ActivatedRoute,) {

    console.log("Componente Registro creandose!")
  }

  ngOnInit():void {
    console.log("Componente Registro creado!")
  }

  setValue() {
    this.nombre = '';
  }

  ngOnChanges() {

  }

  onSubmit(fas: NgForm) {
    console.log(f.value);
  }

  validarSesion.when(function(){
    if( SesionUsuario==true
       then lista.
    ) else
  });

  agregarUsuario () {

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
}
