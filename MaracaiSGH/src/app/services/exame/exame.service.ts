import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Exame } from 'src/app/models/exame/exame';

@Injectable({
  providedIn: 'root'
})
export class ExameService {
  private readonly API_URL = 'http://localhost:8080/exame';
  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Exame[]>(this.API_URL);
  }

  adicionarExame(exame: Exame) {
    return this.http.post<Exame>(this.API_URL, exame);
  }

  editarExame(exame: Exame) {
    return this.http.put<Exame>(this.API_URL+'/'+exame.id, exame);
  }

  excluirExame(exame: Exame) {
    return this.http.delete<Exame>(this.API_URL+'/'+exame.id);
  }
}
