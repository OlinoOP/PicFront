import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Internacao } from 'src/app/models/internacao/internacao';

@Injectable({
  providedIn: 'root'
})
export class InternacaoService {
  private readonly API_URL = 'http://localhost:8080/internacoes';
  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Internacao[]>(this.API_URL);
  }

  adicionarInternacao(internacao: Internacao) {
    return this.http.post<Internacao>(this.API_URL, internacao);
  }

  editarInternacao(internacao: Internacao) {
    return this.http.put<Internacao>(this.API_URL+'/'+internacao.id, internacao);
  }

  excluirInternacao(internacao: Internacao) {
    return this.http.delete<Internacao>(this.API_URL+'/'+internacao.id);
  }
  
}
