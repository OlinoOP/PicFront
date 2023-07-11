import { Component } from '@angular/core';
import { EstoqueMedicamento } from 'src/app/models/medicamento/estoque-medicamento';
import { Medicamento } from 'src/app/models/medicamento/medicamento';
import { EstoqueMedicamentoService } from 'src/app/services/medicamento/estoque-medicamento.service';
import { MedicamentoService } from 'src/app/services/medicamento/medicamento.service';

@Component({
  selector: 'app-estoque-medicamento',
  templateUrl: './estoque-medicamento.component.html',
  styleUrls: ['./estoque-medicamento.component.css']
})
export class EstoqueMedicamentoComponent {
  estoqueMedicamentos: EstoqueMedicamento[] = [];
  novoEstoqueMedicamento: EstoqueMedicamento = new EstoqueMedicamento();
  medicamentos: Medicamento[] = [];

  constructor(private estoqueMedicamentoService: EstoqueMedicamentoService,
    private medicamentoService: MedicamentoService) { }

  ngOnInit(): void {
    this.carregarEstoqueMedicamentos();
    this.carregarMedicamentos();
  }

  carregarMedicamentos(): void {
    this.medicamentoService.list()
      .subscribe(medicamentos => this.medicamentos = medicamentos);
  }

  carregarEstoqueMedicamentos(): void {
    this.estoqueMedicamentoService.list()
      .subscribe(estoqueMedicamentos => this.estoqueMedicamentos = estoqueMedicamentos);
  }

  adicionarEstoqueMedicamento(): void {
    this.estoqueMedicamentoService.adicionarEstoqueMedicamento(this.novoEstoqueMedicamento).subscribe(estoqueMedicamento => {
      this.novoEstoqueMedicamento = new EstoqueMedicamento();
      this.carregarEstoqueMedicamentos();
    });
  }

  editarEstoqueMedicamento(): void {
    this.estoqueMedicamentoService.editarEstoqueMedicamento(this.novoEstoqueMedicamento).subscribe(estoqueMedicamento => {
      this.novoEstoqueMedicamento = new EstoqueMedicamento();
      this.carregarEstoqueMedicamentos();
    });
  }

  preparaEdicao(estoqueMedicamento: EstoqueMedicamento): void {
    this.novoEstoqueMedicamento = new EstoqueMedicamento();
    this.novoEstoqueMedicamento.id = estoqueMedicamento.id;
    this.novoEstoqueMedicamento.medicamento = estoqueMedicamento.medicamento;
    this.novoEstoqueMedicamento.quantidade = estoqueMedicamento.quantidade;
    this.novoEstoqueMedicamento.dataValidade = estoqueMedicamento.dataValidade;
    this.novoEstoqueMedicamento.lote = estoqueMedicamento.lote;
  }

  preparaExclusao(estoqueMedicamento: EstoqueMedicamento): void {
    this.novoEstoqueMedicamento = estoqueMedicamento;
  }

  excluirEstoqueMedicamento(estoqueMedicamento: EstoqueMedicamento): void {
    this.estoqueMedicamentoService.excluirEstoqueMedicamento(estoqueMedicamento).subscribe(estoqueMedicamento => {
      this.novoEstoqueMedicamento = new EstoqueMedicamento();
      this.carregarEstoqueMedicamentos();
    });
  }

}
