import { Medico } from "../medico/medico";
import { Paciente } from "../paciente/paciente";
import { Exame } from "./exame";

export class ExameSolicitado {
    id!: number;
    descricao!: string;
    dataExame!: string;
    exame!: Exame;
    paciente!: Paciente;
    medico!: Medico;
  }
  