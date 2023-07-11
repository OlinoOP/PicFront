import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { ExameComponent } from './components/exame/exame.component';
import { PrescricaoComponent } from './components/prescricao/prescricao.component';
import { InternacaoComponent } from './components/internacao/internacao.component';
import { PacienteComponent } from './components/paciente/paciente.component';
import { MedicoComponent } from './components/medico/medico.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MedicamentoComponent } from './components/medicamento/medicamento.component';
import { LeitoComponent } from './components/leito/leito.component';
import { EstoqueMedicamentoComponent } from './components/estoque-medicamento/estoque-medicamento.component';
import { DispensacaoMedicamentoComponent } from './components/dispensacao-medicamento/dispensacao-medicamento.component';
import { ExameSolicitadoComponent } from './components/exame-solicitado/exame-solicitado.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'paciente', component: PacienteComponent },
  { path: 'medico', component: MedicoComponent },
  { path: 'internacao', component: InternacaoComponent },
  { path: 'prescricao', component: PrescricaoComponent },
  { path: 'exame', component: ExameComponent },
  { path: 'usuario', component: UsuarioComponent },
  { path: 'medicamento', component: MedicamentoComponent },
  { path: 'leito', component: LeitoComponent },
  { path: 'estoquemed', component: EstoqueMedicamentoComponent },
  { path: 'dispensacaomed', component: DispensacaoMedicamentoComponent },
  { path: 'examesolicitado', component: ExameSolicitadoComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
