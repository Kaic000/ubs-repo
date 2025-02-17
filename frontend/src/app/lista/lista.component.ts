import { Component } from '@angular/core';
import { Paciente } from '../model/paciente';
import { PacienteService } from '../service/paciente.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
  providers: [PacienteService]
})
export class ListaComponent {
  mensagem: string = "";
  pacientes: Paciente[] = [];

  constructor(private service: PacienteService) {
    this.listarPacientes();
  }

  listarPacientes() {
    this.service.listar().subscribe({
      next: (data) => {
        this.pacientes = data;
      },
      error: (msg) => {
        this.mensagem = "Ocorreu um erro ao listar os pacientes.";
      }
    });
  }


  editarPaciente(id: number): void {
    console.log(`Editar paciente com ID: ${id}`);

  }

  excluirPaciente(id: number): void {
    console.log(`Excluir paciente com ID: ${id}`);
    this.service.excluir(id).subscribe({
      next: () => {
        this.listarPacientes();
        this.mensagem = "Paciente excluído com sucesso!";
      },
      error: (msg) => {
        this.mensagem = "Erro ao excluir o paciente.";
      }
    });
  }
}
