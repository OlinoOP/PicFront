import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../../models/usuario/usuario';


@Injectable({
  providedIn: 'root'
})

export class UsuarioService {

  private readonly API_URL = 'http://localhost:8080/user'; 

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Usuario[]>(this.API_URL);
  }

  adicionarUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.API_URL, usuario);
  }

  editarUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(this.API_URL+'/'+usuario.id, usuario);
  }

  excluirUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.delete<Usuario>(this.API_URL+'/'+usuario.id);
  }

}
