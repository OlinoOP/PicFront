import { Component } from '@angular/core';
import { Internacao } from 'src/app/models/internacao/internacao';
import { Leito } from 'src/app/models/leito/leito';
import { Medico } from 'src/app/models/medico/medico';
import { Paciente } from 'src/app/models/paciente/paciente';
import { Usuario } from 'src/app/models/usuario/usuario';
import { InternacaoService } from 'src/app/services/internacao/internacao.service';
import { LeitoService } from 'src/app/services/leito/leito.service';
import { MedicoService } from 'src/app/services/medico/medico.service';
import { PacienteService } from 'src/app/services/paciente/paciente.service';

@Component({
  selector: 'app-internacao',
  templateUrl: './internacao.component.html',
  styleUrls: ['./internacao.component.css']
})
export class InternacaoComponent {
  internacoes: Internacao[] = [];
  novaInternacao: Internacao = new Internacao();

  pacientes: Paciente[] = [];
  leitos: Leito[] = [];
  medicos: Medico[] = [];

  constructor(private pacienteService: PacienteService,
    private medicoService: MedicoService,
    private leitoService: LeitoService,
    private internacaoService: InternacaoService) { }

  ngOnInit(): void {
    this.carregarInternacoes();
    this.carregarPacientes();
    this.carregarLeitos();
    this.carregarMedicos();
  }

  carregarPacientes(): void {
    this.pacienteService.list()
      .subscribe(pacientes => this.pacientes = pacientes);
  }

  carregarLeitos(): void {
    this.leitoService.list()
      .subscribe(leitos => this.leitos = leitos);
  }

  carregarMedicos(): void {
    this.medicoService.list()
      .subscribe(medicos => this.medicos = medicos);
  }
  
  carregarInternacoes(): void {
    this.internacaoService.list()
      .subscribe(internacoes => {
        this.internacoes = internacoes
        this.novaInternacao.paciente = new Paciente();
        this.novaInternacao.leito = new Leito();
        this.novaInternacao.medico = new Medico();
      });
  }

  adicionarInternacao(): void {
    this.internacaoService.adicionarInternacao(this.novaInternacao).subscribe(internacao => {
      this.novaInternacao = new Internacao();
      this.carregarInternacoes();
    });
  }

  editarInternacao(): void {
    this.internacaoService.editarInternacao(this.novaInternacao).subscribe(internacao => {
      this.novaInternacao = new Internacao();
      this.carregarInternacoes();
    });
  }

  preparaEdicao(internacao: Internacao): void {
    this.novaInternacao = new Internacao();
    this.novaInternacao.id = internacao.id;
    this.novaInternacao.diagnostico = internacao.diagnostico;
    this.novaInternacao.paciente = internacao.paciente;
    this.novaInternacao.leito = internacao.leito;
    this.novaInternacao.medico = internacao.medico;
  }

  preparaExclusao(internacao: Internacao): void {
    this.novaInternacao = internacao;
  }

  excluirInternacao(internacao: Internacao): void {
    this.internacaoService.excluirInternacao(internacao).subscribe((internacao: Internacao) => {
      this.novaInternacao = new Internacao();
      this.carregarInternacoes();
    });
  }


}
