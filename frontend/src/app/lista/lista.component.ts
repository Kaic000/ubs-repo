import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {
    search = '';
  fichas = [
    { codigo: 3423423, nome: 'Kaic Santos', documento: 'RG 234234234234' },
    { codigo: 3423424, nome: 'Pedro Padoan', documento: 'CPF 12345678901' }
  ];

  novoRegistro() {
    alert('Novo registro será adicionado.');
  }

  importarFicha() {
    alert('Funcionalidade de importação de ficha.');
  }

  editarRegistro(codigo: number) {
    const ficha = this.fichas.find(f => f.codigo === codigo);
    if (ficha) {
      alert(`Editando registro de ${ficha.nome} (${ficha.codigo}).`);
    } else {
      alert('Registro não encontrado.');
    }
  }
}