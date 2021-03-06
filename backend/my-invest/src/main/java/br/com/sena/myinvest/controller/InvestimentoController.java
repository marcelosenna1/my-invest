package br.com.sena.myinvest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.sena.myinvest.domain.Investimento;
import br.com.sena.myinvest.repository.InvestimentoRepository;
import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping("/investimentos")
@CrossOrigin(origins = "http://localhost:3000")
public class InvestimentoController {

	@Autowired // caso eu não usasse a anotação do lombok que cria os contrutores
	private InvestimentoRepository investimentoRepository;

	@GetMapping
	public List<Investimento> listarTodos() {

		return investimentoRepository.findAll();
	}

	@GetMapping("/{idInvestimento}")
	public Investimento findById(@PathVariable Long idInvestimento) {

		return investimentoRepository.findById(idInvestimento).orElse(null);
	}

	@DeleteMapping("/{idInvestimento}")
	public void remover(@PathVariable Long idInvestimento) {
		investimentoRepository.deleteById(idInvestimento);
	}

	@PostMapping
	public Investimento cadastrar(@RequestBody Investimento investimento) {

		return investimentoRepository.save(investimento);
	}

}
