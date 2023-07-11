import { Component } from '@angular/core';
import { Medico } from 'src/app/models/medico/medico';
import { Usuario } from 'src/app/models/usuario/usuario';
import { MedicoService } from 'src/app/services/medico/medico.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrls: ['./medico.component.css']
})
export class MedicoComponent {
  medicos: Medico[] = [];
  novoMedico: Medico = new Medico();
  usuarios: Usuario[] = [];

  constructor(private medicoService: MedicoService, private usuarioService: UsuarioService) { }
  
  ngOnInit(): void {
    this.carregarUsuarios();
    this.carregarMedicos();
  }
  carregarMedicos(): void {
    this.medicoService.list()
    .subscribe(medicos => this.medicos = medicos);  
  }

  carregarUsuarios(): void {
    this.usuarioService.list()
    .subscribe(usuarios => this.usuarios = usuarios);
  }

  adicionarMedico(): void {
    this.novoMedico.usuario.permissao = '2';
    this.medicoService.adicionarMedico(this.novoMedico).subscribe(medico => {
      this.novoMedico = new Medico();
      this.carregarMedicos();
    });
  }

  editarMedico(medico: Medico): void {
    this.medicoService.editarMedico(medico).subscribe(medico => {
      this.novoMedico = new Medico();
      this.carregarMedicos();
    });
  }

  preparaEdicao(medico: Medico): void {
    this.novoMedico = new Medico();
    this.novoMedico.id = medico.id;
    this.novoMedico.crm = medico.crm;
    this.novoMedico.telefone = medico.telefone;
    this.novoMedico.usuario = medico.usuario;
  }

  excluirMedico(medico: Medico): void {
    this.medicoService.excluirMedico(medico).subscribe((medico: Medico) => {
      this.novoMedico = new Medico();
      this.carregarMedicos();
    });
  }
}
