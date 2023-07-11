import { Component } from '@angular/core';
import { Medicamento } from 'src/app/models/medicamento/medicamento';
import { MedicamentoService } from 'src/app/services/medicamento/medicamento.service';

@Component({
  selector: 'app-medicamento',
  templateUrl: './medicamento.component.html',
  styleUrls: ['./medicamento.component.css']
})
export class MedicamentoComponent {
  medicamentos: Medicamento[] = [];
  novoMedicamento: Medicamento = new Medicamento();

  constructor(private medicamento: MedicamentoService) { }

  ngOnInit(): void {
    this.carregarMedicamentos();
  }

  carregarMedicamentos(): void {
    this.medicamento.list()
      .subscribe(medicamentos => this.medicamentos = medicamentos);
  }

  adicionarMedicamento(): void {
    this.medicamento.adicionarMedicamento(this.novoMedicamento).subscribe(medicamento => {
      this.novoMedicamento = new Medicamento();
      this.carregarMedicamentos();
    });
  }

  editarMedicamento(): void {
    this.medicamento.editarMedicamento(this.novoMedicamento).subscribe(medicamento => {
      this.novoMedicamento = new Medicamento();
      this.carregarMedicamentos();
    });
  }

  preparaEdicao(medicamento: Medicamento): void {
    this.novoMedicamento = new Medicamento();
    this.novoMedicamento.id = medicamento.id;
    this.novoMedicamento.nomeComercial = medicamento.nomeComercial;
    this.novoMedicamento.nomeGenerico = medicamento.nomeGenerico;
    this.novoMedicamento.fabricante = medicamento.fabricante;
    this.novoMedicamento.concentracao = medicamento.concentracao;
    this.novoMedicamento.unidadeMedida = medicamento.unidadeMedida;
  }

  preparaExclusao(medicamento: Medicamento): void {
    this.novoMedicamento = medicamento;
  }

  excluirMedicamento(medicamento: Medicamento): void {
    this.medicamento.excluirMedicamento(medicamento).subscribe((medicamento: Medicamento) => {
      this.novoMedicamento = new Medicamento();
      this.carregarMedicamentos();
    });
  }

}
