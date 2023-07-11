import { Component } from '@angular/core';
import { Exame } from 'src/app/models/exame/exame';
import { ExameService } from 'src/app/services/exame/exame.service';

@Component({
  selector: 'app-exame',
  templateUrl: './exame.component.html',
  styleUrls: ['./exame.component.css']
})
export class ExameComponent {
  exames: Exame[] = [];
  novoExame: Exame = new Exame();

  constructor(private exameService:ExameService) { }

  ngOnInit(): void {
    this.carregarExames();
  }

  carregarExames(): void {
    this.exameService.list()
      .subscribe(exames => this.exames = exames);
  }

  adicionarExame(): void {
    this.exameService.adicionarExame(this.novoExame).subscribe(exame => {
      this.novoExame = new Exame();
      this.carregarExames();
    });
  }

  editarExame(): void {
    this.exameService.editarExame(this.novoExame).subscribe(exame => {
      this.novoExame = new Exame();
      this.carregarExames();
    });
  }

  preparaEdicao(exame: Exame): void {
    this.novoExame = new Exame();
    this.novoExame.id = exame.id;
    this.novoExame.tipo = exame.tipo;
    this.novoExame.descricao = exame.descricao;
  }

  preparaExclusao(exame: Exame): void {
    this.novoExame = exame;
  }

  excluirExame(exame: Exame): void {
    this.exameService.excluirExame(exame).subscribe((exame: Exame) => {
      this.novoExame = new Exame();
      this.carregarExames();
    });
  }

}
