import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Medico } from 'src/app/models/medico/medico';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  private readonly API_URL = 'http://localhost:8080/medico';

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Medico[]>(this.API_URL);
  }

  adicionarMedico(medico: Medico) {
    return this.http.post<Medico>(this.API_URL, medico);
  }

  editarMedico(medico: Medico) {
    return this.http.put<Medico>(this.API_URL+'/'+medico.id, medico);
  }

  excluirMedico(medico: Medico) {
    return this.http.delete<Medico>(this.API_URL+'/'+medico.id);
  }
}
