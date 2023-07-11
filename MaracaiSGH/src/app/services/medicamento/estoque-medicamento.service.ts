import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EstoqueMedicamento } from 'src/app/models/medicamento/estoque-medicamento';

@Injectable({
  providedIn: 'root'
})
export class EstoqueMedicamentoService {
  private readonly API = 'http://localhost:8080/estoque/medicamento';
  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<EstoqueMedicamento[]>(this.API);
  }

  adicionarEstoqueMedicamento(estoqueMedicamento: EstoqueMedicamento) {
    return this.http.post(this.API, estoqueMedicamento);
  }

  editarEstoqueMedicamento(estoqueMedicamento: EstoqueMedicamento) {
    return this.http.put(this.API+'/'+estoqueMedicamento.id+'/2', estoqueMedicamento);
  }

  excluirEstoqueMedicamento(estoqueMedicamento: EstoqueMedicamento) {
    return this.http.delete(`${this.API}/${estoqueMedicamento.id}`);
  }
  
}
