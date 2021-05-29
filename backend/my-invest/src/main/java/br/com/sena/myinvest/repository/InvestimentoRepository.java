package br.com.sena.myinvest.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.sena.myinvest.domain.Investimento;

public interface InvestimentoRepository extends JpaRepository<Investimento, Long> {

}
