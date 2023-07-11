import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Leito } from 'src/app/models/leito/leito';

@Injectable({
  providedIn: 'root'
})
export class LeitoService {
  private readonly API_URL = 'http://localhost:8080/leito';
  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Leito[]>(this.API_URL);
  }

  adicionarLeito(leito: Leito) {
    return this.http.post(this.API_URL, leito);
  }

  editarLeito(leito: Leito) {
    return this.http.put(this.API_URL+'/'+leito.id, leito);
  }

  excluirLeito(leito: Leito) {
    return this.http.delete(this.API_URL + '/' + leito.id);
  }
}
