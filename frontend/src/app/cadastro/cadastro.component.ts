import { Component } from '@angular/core';
import { PacienteService } from '../service/paciente.service';
import { Paciente } from '../model/paciente';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
  providers: [PacienteService]
})
export class CadastroComponent {
  public obj: Paciente = new Paciente();
  public mensagem: string = "";

  constructor(private pacienteService: PacienteService) { }


  public gravarCadastro() {
    this.pacienteService.gravar(this.obj).subscribe({
      next: (data) => {
        this.mensagem = "Paciente Cadastrado";
      },
      error: (msg) => {
        this.mensagem = "Ocorreu um erro tente mais tarde ";}
      });
      this.limpar();
    }

      public limpar() {
        this.obj = new Paciente();
      }
    }

