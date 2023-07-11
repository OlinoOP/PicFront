import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExameComponent } from './components/exame/exame.component';
import { MedicoComponent } from './components/medico/medico.component';
import { InternacaoComponent } from './components/internacao/internacao.component';
import { PrescricaoComponent } from './components/prescricao/prescricao.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PacienteComponent } from './components/paciente/paciente.component';
import { HttpClientModule } from '@angular/common/http';
import { MedicamentoComponent } from './components/medicamento/medicamento.component';
import { LeitoComponent } from './components/leito/leito.component';
import { EstoqueMedicamentoComponent } from './components/estoque-medicamento/estoque-medicamento.component';
import { DispensacaoMedicamentoComponent } from './components/dispensacao-medicamento/dispensacao-medicamento.component';
import { ExameSolicitadoComponent } from './components/exame-solicitado/exame-solicitado.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    ExameComponent,
    MedicoComponent,
    InternacaoComponent,
    PrescricaoComponent,
    DashboardComponent,
    PacienteComponent,
    MedicamentoComponent,
    LeitoComponent,
    EstoqueMedicamentoComponent,
    DispensacaoMedicamentoComponent,
    ExameSolicitadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
