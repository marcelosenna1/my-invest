package br.com.sena.myinvest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.sena.myinvest.domain.Categoria;
import br.com.sena.myinvest.repository.CategoriaRepository;
import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping("/categorias")
public class CategoriaController {
	
	@Autowired // caso eu não usasse a anotação do lombok que cria os contrutores
	private CategoriaRepository categoriaRepository;

	@GetMapping
	public List<Categoria> listarTodos() {

		return categoriaRepository.findAll();
	}

	@GetMapping("/{idCategoria}")
	public Categoria findById(@PathVariable Long idCategoria) {

		return categoriaRepository.findById(idCategoria).orElse(null);
	}

	@DeleteMapping
	public void remover(@PathVariable Long idCategoria) {
		categoriaRepository.deleteById(idCategoria);
	}

	@PostMapping
	public Categoria cadastrar(@RequestBody Categoria categoria) {

		return categoriaRepository.save(categoria);
	}

}
