import { Component, OnInit } from '@angular/core';
import { PacienteService } from '../service/paciente.service';
import { Paciente } from '../model/paciente';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
  providers: [PacienteService]
})
export class ListaComponent implements OnInit {
  public pacientes: Paciente[] = [];
  public mensagem: string = "";

  constructor(private pacienteService: PacienteService) { }

  ngOnInit(): void {
    this.listarPacientes();
  }

 
  listarPacientes(): void {
    this.pacienteService.listar().subscribe({
      next: (data) => {
        this.pacientes = data; 
      },
      error: (err) => {
        this.mensagem = "Erro ao carregar lista de pacientes. Tente novamente mais tarde.";
      }
    });
  }


  removerPaciente(codigo: number) {
    this.pacienteService.remove(codigo).subscribe({
      next: () => {
        this.mensagem = "Paciente removido com sucesso!";
        this.listarPacientes(); 
      },
      error: (err) => {
        this.mensagem = "Erro ao remover paciente.";
      }
    });
  }
}
