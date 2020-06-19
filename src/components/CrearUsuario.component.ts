import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-CrearUsuario',
  templateUrl: './CrearUsuario.html',
  styleUrls: ['../main.css']
})

export class CrearUsuarioComponent implements OnInit {

  public nombre: string = 'ingrese su nombre';
  public email: string = 'registre una cuenta activa de email';
  public password: string = 'asigne una clave';
  public password2: string = 'repita la clave anterior';

  constructor(private route: ActivatedRoute,) {

    console.log("Componente CrearUsuario creandose!")
  }

  ngOnInit():void {
    console.log("Componente CrearUsuario creado!")
  }

  setValue() {
    this.nombre = '';
  }

  ngOnChanges() {

  }

  onSubmit(fas: NgForm) {
    console.log(f.value);
  }
}
