import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Paciente } from 'src/app/models/paciente/paciente';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  private readonly API_URL = 'http://localhost:8080/paciente';

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Paciente[]>(this.API_URL);
  }

  adicionarPaciente(paciente: Paciente) {
    return this.http.post<Paciente>(this.API_URL, paciente);
  }

  editarPaciente(paciente: Paciente) {
    return this.http.put<Paciente>(this.API_URL+'/'+paciente.id, paciente);
  }

  excluirPaciente(paciente: Paciente) {
    return this.http.delete<Paciente>(this.API_URL+'/'+paciente.id);
  }
 
}
