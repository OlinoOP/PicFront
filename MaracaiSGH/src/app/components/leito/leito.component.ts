import { Component } from '@angular/core';
import { Leito } from 'src/app/models/leito/leito';
import { LeitoService } from 'src/app/services/leito/leito.service';

@Component({
  selector: 'app-leito',
  templateUrl: './leito.component.html',
  styleUrls: ['./leito.component.css']
})
export class LeitoComponent {
  leitos: Leito[] = [];
  novoLeito: Leito = new Leito();

  constructor(private leitoService: LeitoService) { }

  ngOnInit(): void {
    this.carregarLeitos();
  }

  carregarLeitos(): void {
    this.leitoService.list()
      .subscribe(leitos => this.leitos = leitos);
  }

  adicionarLeito(): void {
    this.leitoService.adicionarLeito(this.novoLeito).subscribe(leito => {
      this.novoLeito = new Leito();
      this.carregarLeitos();
    });
  }

  editarLeito(): void {
    this.leitoService.editarLeito(this.novoLeito).subscribe(leito => {
      this.novoLeito = new Leito();
      this.carregarLeitos();
    });
  }

  preparaEdicao(leito: Leito): void {
    this.novoLeito = new Leito();
    this.novoLeito.id = leito.id;
    this.novoLeito.numeroSala = leito.numeroSala;
    this.novoLeito.disponibilidade = leito.disponibilidade;
  }

  preparaExclusao(leito: Leito): void {
    this.novoLeito = leito;
  }

  excluirLeito(leito: Leito): void {
    this.leitoService.excluirLeito(leito).subscribe(leito => {
      this.novoLeito = new Leito();
      this.carregarLeitos();
    });
  }

}
