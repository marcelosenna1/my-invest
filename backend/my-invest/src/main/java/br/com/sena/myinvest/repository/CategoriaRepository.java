package br.com.sena.myinvest.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.sena.myinvest.domain.Categoria;

public interface CategoriaRepository extends JpaRepository<Categoria, Long> {

}
