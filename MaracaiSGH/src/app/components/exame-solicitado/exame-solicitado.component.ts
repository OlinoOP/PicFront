import { Component } from '@angular/core';
import { Exame } from 'src/app/models/exame/exame';
import { ExameSolicitado } from 'src/app/models/exame/exame-solicitado';
import { Medico } from 'src/app/models/medico/medico';
import { Paciente } from 'src/app/models/paciente/paciente';
import { ExameSolicitadoService } from 'src/app/services/exame/exame-solicitado.service';
import { ExameService } from 'src/app/services/exame/exame.service';
import { MedicoService } from 'src/app/services/medico/medico.service';
import { PacienteService } from 'src/app/services/paciente/paciente.service';

@Component({
  selector: 'app-exame-solicitado',
  templateUrl: './exame-solicitado.component.html',
  styleUrls: ['./exame-solicitado.component.css']
})
export class ExameSolicitadoComponent {
  examesSolicitados: ExameSolicitado[] = [];
  pacientes: Paciente[] = [];
  medicos: Medico[] = [];
  exames: Exame[] = [];
  novoExameSolicitado: ExameSolicitado = new ExameSolicitado();
  

  constructor(private exameSolicitadoService: ExameSolicitadoService,
    private pacienteService: PacienteService,
    private medicoService: MedicoService,
    private exameService: ExameService) { }

  ngOnInit(): void {
    this.carregarExamesSolicitados();
    this.carregarPacientes();
    this.carregarMedicos();
    this.carregarExames();
  }

  carregarExamesSolicitados(): void {
    this.exameSolicitadoService.list()
      .subscribe(examesSolicitados =>{
        this.examesSolicitados = examesSolicitados;
        this.novoExameSolicitado.exame = new Exame();
        this.novoExameSolicitado.paciente = new Paciente();
        this.novoExameSolicitado.medico = new Medico();
      });
  }

  carregarPacientes(): void {
    this.pacienteService.list()
      .subscribe(pacientes => this.pacientes = pacientes);
  }

  carregarMedicos(): void {
    this.medicoService.list()
      .subscribe(medicos => this.medicos = medicos);
  }

  carregarExames(): void {
    this.exameService.list()
      .subscribe(exames => this.exames = exames);
  }

  adicionarExameSolicitado(): void {
    this.exameSolicitadoService.adicionarExameSolicitado(this.novoExameSolicitado).subscribe(exameSolicitado => {
      this.novoExameSolicitado = new ExameSolicitado();
      this.carregarExamesSolicitados();
    });
  }

  editarExameSolicitado(): void {
    this.exameSolicitadoService.editarExameSolicitado(this.novoExameSolicitado).subscribe(exameSolicitado => {
      this.novoExameSolicitado = new ExameSolicitado();
      this.carregarExamesSolicitados();
    });
  }

  preparaEdicao(exameSolicitado: ExameSolicitado): void {
    this.novoExameSolicitado = new ExameSolicitado();
    this.novoExameSolicitado.id = exameSolicitado.id;
    this.novoExameSolicitado.dataExame = exameSolicitado.dataExame;
    this.novoExameSolicitado.descricao = exameSolicitado.descricao;
    this.novoExameSolicitado.paciente = exameSolicitado.paciente;
    this.novoExameSolicitado.medico = exameSolicitado.medico;
    this.novoExameSolicitado.exame = exameSolicitado.exame;
  }

  preparaExclusao(exameSolicitado: ExameSolicitado): void {
    this.novoExameSolicitado = exameSolicitado;
  }

  excluirExameSolicitado(exameSolicitado: ExameSolicitado): void {
    this.exameSolicitadoService.excluirExameSolicitado(exameSolicitado).subscribe(exameSolicitado => {
      this.novoExameSolicitado = new ExameSolicitado();
      this.carregarExamesSolicitados();
    });
  }


}
