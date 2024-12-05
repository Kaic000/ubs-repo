package br.sp.gov.fatec.ubs.model;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface PacienteRepository extends JpaRepository<Paciente, Long> {
     
    public List<Paciente> findByNomeContainsIgnoreCase(String nomeCompleto);
 
    @Query("select p from paciente p where p.nome = :nome")
    public List<Paciente> buscaPorNome(@Param("nomeCompleto") String nomeCompleto);
 
    @Query("select p from paciente p where p.nome = :nome and p.cpf = :cpf")
    public List<Paciente> buscaPorNomeECpf(@Param("nomeCompleto") String nomeCompleto, @Param("cpf") String cpf);
 
    @Query("select p from paciente p where p.nome = :nome or p.cpf = :cpf")
    public List<Paciente> buscaPorNomeOuCpf(@Param("nomeCompleto") String nomeCompleto, @Param("cpf") String cpf);
 
    @Query(value = "select * from paciente where nome = :nome", nativeQuery = true)
    public List<Paciente> buscaPorNomeNativo(@Param("nomeCompleto") String nomeCompleto);
 

}
