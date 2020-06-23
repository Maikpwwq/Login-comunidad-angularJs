export interface FichaUsuario {
  nombre: string;
  email: string;
  password: string;
  password2: string;
}
/*
constructor(public ...){}
*/
export interface AccesoSesionRespuesta {
  estaAutentificado: boolean;
  usuario: Usuario;
  token: string;
}

export interface Usuario {
  _id: string;
  nombre: string;
  email: string;
  password: string;
  password2: string;
}
