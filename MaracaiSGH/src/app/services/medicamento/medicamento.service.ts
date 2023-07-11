import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Medicamento } from 'src/app/models/medicamento/medicamento';

@Injectable({
  providedIn: 'root'
})
export class MedicamentoService {
  private readonly API_URL = 'http://localhost:8080/medicamento';

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Medicamento[]>(this.API_URL);
  }

  adicionarMedicamento(medicamento: Medicamento) {
    return this.http.post<Medicamento>(this.API_URL, medicamento);
  }

  editarMedicamento(medicamento: Medicamento) {
    return this.http.put<Medicamento>(this.API_URL+'/'+medicamento.id, medicamento);
  }

  excluirMedicamento(medicamento: Medicamento) {
    return this.http.delete<Medicamento>(this.API_URL+'/'+medicamento.id);
  }
}
