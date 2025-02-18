import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paciente } from '../model/paciente';
 
@Injectable({
  providedIn: 'root',
})
 
 
export class PacienteService {
 
  constructor(private http: HttpClient) { }
 
  public salvar(obj: Paciente): Observable<Paciente> {
    return this.http.post<Paciente>('http://localhost:8081/paciente', obj);
  }
  public excluir(id: number): Observable<Paciente> {
    return this.http.delete<Paciente>('http://localhost:8081/paciente/' + id);
  }
  public listar(): Observable<Paciente[]> {
    return this.http.get<Paciente[]>('http://localhost:8081/paciente');
  }
  public atualizar(obj: Paciente): Observable<Paciente> {
    return this.http.put<Paciente>(`http://localhost:8081/pacientes/${obj.id}`, obj);
  }
 
 
}
 