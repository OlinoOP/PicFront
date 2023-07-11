import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ExameSolicitado } from 'src/app/models/exame/exame-solicitado';

@Injectable({
  providedIn: 'root'
})
export class ExameSolicitadoService {
  private readonly API = 'http://localhost:8080/examesolicitado';

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<ExameSolicitado[]>(this.API);
  }

  adicionarExameSolicitado(exameSolicitado: ExameSolicitado) {
    return this.http.post<ExameSolicitado>(this.API, exameSolicitado);
  }

  editarExameSolicitado(exameSolicitado: ExameSolicitado) {
    return this.http.put<ExameSolicitado>(this.API+''+exameSolicitado.id, exameSolicitado);
  }

  excluirExameSolicitado(exameSolicitado: ExameSolicitado) {
    return this.http.delete(this.API+''+exameSolicitado.id);
  }

}
