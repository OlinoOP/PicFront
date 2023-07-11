import { Medicamento } from "./medicamento";

export class EstoqueMedicamento {
    id!: number;
    medicamento!: Medicamento;
    quantidade!: number;
    dataValidade!: string;
    lote!: string;
  }
