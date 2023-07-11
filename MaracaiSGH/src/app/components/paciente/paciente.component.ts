import { Component } from '@angular/core';
import { Paciente } from 'src/app/models/paciente/paciente';
import { PacienteService } from 'src/app/services/paciente/paciente.service';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent {
  pacientes: Paciente[] = [];
  novoPaciente: Paciente = new Paciente();

  constructor(private pacienteService: PacienteService) { }

  ngOnInit(): void {
    this.carregarPacientes();
  }

  carregarPacientes(): void {
    this.pacienteService.list()
      .subscribe(pacientes => this.pacientes = pacientes);
  }

  adicionarPaciente(): void {
    this.pacienteService.adicionarPaciente(this.novoPaciente).subscribe(paciente => {
      this.novoPaciente = new Paciente();
      this.carregarPacientes();
    });
  }

  editarPaciente(): void {
    this.pacienteService.editarPaciente(this.novoPaciente).subscribe(paciente => {
      this.novoPaciente = new Paciente();
      this.carregarPacientes();
    });
  }

  preparaEdicao(paciente: Paciente): void {
    this.novoPaciente = new Paciente();
    this.novoPaciente.id = paciente.id;
    this.novoPaciente.nome = paciente.nome;
    this.novoPaciente.dataNascimento = paciente.dataNascimento;
    this.novoPaciente.cpf = paciente.cpf;
    this.novoPaciente.sexo = paciente.sexo;
    this.novoPaciente.endereco = paciente.endereco;
    this.novoPaciente.cidade = paciente.cidade;
    this.novoPaciente.estado = paciente.estado;
    this.novoPaciente.telefone = paciente.telefone;
  }

  preparaExclusao(paciente: Paciente): void {
    this.novoPaciente = paciente;
  }

  excluirPaciente(paciente: Paciente): void {
    this.pacienteService.excluirPaciente(paciente).subscribe((paciente: Paciente) => {
      this.novoPaciente = new Paciente();
      this.carregarPacientes();
    });
  }


}
