import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario/usuario';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {
  usuarios: Usuario[] = [];
  novoUsuario: Usuario = new Usuario();

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.carregarUsuarios();
  }
  carregarUsuarios(): void {
    this.usuarioService.list()
      .subscribe(usuarios => this.usuarios = usuarios);
  }

  adicionarUsuario(): void {
    this.usuarioService.adicionarUsuario(this.novoUsuario).subscribe(usuario => {
      this.novoUsuario = new Usuario();
      this.carregarUsuarios();
    });
  }

  editarUsuario(): void {
    this.usuarioService.editarUsuario(this.novoUsuario).subscribe(usuario => {
      this.novoUsuario = new Usuario();
      this.carregarUsuarios();
    });
  }

  preparaEdicao(usuario: Usuario): void {
    this.novoUsuario = new Usuario();
    this.novoUsuario.id = usuario.id;
    this.novoUsuario.nome = usuario.nome;
    this.novoUsuario.cpf = usuario.cpf;
    this.novoUsuario.permissao = usuario.permissao;
  }

  preparaExclusao(usuario: Usuario): void {
    this.novoUsuario = usuario;
  }

  excluirUsuario(usuario: Usuario): void {
    this.usuarioService.excluirUsuario(usuario).subscribe((usuario: Usuario) => {
      this.novoUsuario = new Usuario();
      this.carregarUsuarios();
    });
  }
}
