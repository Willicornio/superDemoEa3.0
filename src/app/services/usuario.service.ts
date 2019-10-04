import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Usuario } from '../models/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  userNew : any;
  usuarios: Usuario[];
  selectedUsuario: Usuario;
  nuevoUsuario: Usuario;
readonly URL_API = 'http://localhost:3000/api/usuarios';

  constructor(private http: HttpClient) {
    this.selectedUsuario = new Usuario();
    this.nuevoUsuario = new Usuario();
   }

  getUsuarios(){
    return this.http.get(this.URL_API);
  }

  getUsuario(_id: String) : Observable<Usuario>
  {
    return this.http.get<Usuario>(this.URL_API + `/${_id}`);
  }
  postUsuario(user: Usuario){
    return this.http.post(this.URL_API, user);
  }

  putUsuario(user: Usuario){
    return this.http.put(this.URL_API + `/${user.id}`, user);
  }

  deleteUsuario(user: Usuario){
    return this.http.delete(this.URL_API+ `/${user.id}`);
  }

  loginUsuario(name: String, pass: String){
     this.userNew = new Usuario();
     this.userNew.name = name;
     this.userNew.pass = pass;
     return this.http.post(this.URL_API+ '/login', this.userNew);
  }
}
