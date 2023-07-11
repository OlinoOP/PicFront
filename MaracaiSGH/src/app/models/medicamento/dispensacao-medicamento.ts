import { Usuario } from "../usuario/usuario";
import { EstoqueMedicamento } from "./estoque-medicamento";

export class DispensacaoMedicamento {
    id!: number;
    dataDispensacao!: string;
    quantidadeDispensada!: number;
    estoqueMedicamento!: EstoqueMedicamento;
    usuario!: Usuario;
  }
  