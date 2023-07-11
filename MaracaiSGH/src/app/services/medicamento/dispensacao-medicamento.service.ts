import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DispensacaoMedicamento } from 'src/app/models/medicamento/dispensacao-medicamento';

@Injectable({
  providedIn: 'root'
})
export class DispensacaoMedicamentoService {
  private readonly API = 'http://localhost:8080/dispensacao/medicamento';
  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<DispensacaoMedicamento[]>(this.API);
  }
}
