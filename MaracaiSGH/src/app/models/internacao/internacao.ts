import { Leito } from "../leito/leito";
import { Medico } from "../medico/medico";
import { Paciente } from "../paciente/paciente";

export class Internacao {
    id!: number;
    dataEntrada!: string;
    dataSaida!: string;
    diagnostico!: string;
    leito!: Leito;
    medico!: Medico;
    paciente!: Paciente;
  }
  