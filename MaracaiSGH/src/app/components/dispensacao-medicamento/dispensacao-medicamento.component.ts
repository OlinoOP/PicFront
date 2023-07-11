import { Component } from '@angular/core';
import { DispensacaoMedicamento } from 'src/app/models/medicamento/dispensacao-medicamento';
import { EstoqueMedicamento } from 'src/app/models/medicamento/estoque-medicamento';
import { Usuario } from 'src/app/models/usuario/usuario';
import { DispensacaoMedicamentoService } from 'src/app/services/medicamento/dispensacao-medicamento.service';
import { EstoqueMedicamentoService } from 'src/app/services/medicamento/estoque-medicamento.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-dispensacao-medicamento',
  templateUrl: './dispensacao-medicamento.component.html',
  styleUrls: ['./dispensacao-medicamento.component.css']
})
export class DispensacaoMedicamentoComponent {
  dispensacoes: DispensacaoMedicamento[] = [];

  constructor(private dispensacaoService:DispensacaoMedicamentoService) { }

  ngOnInit(): void {
    this.carregarDispensacoes();
  }

  carregarDispensacoes(): void {
    this.dispensacaoService.list()
      .subscribe(dispensacoes => this.dispensacoes = dispensacoes);
  }
}
