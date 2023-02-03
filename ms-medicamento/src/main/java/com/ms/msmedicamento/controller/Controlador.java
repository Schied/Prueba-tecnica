package com.ms.msmedicamento.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ms.msmedicamento.entity.Medicamento;
import com.ms.msmedicamento.service.medicamentoServiceIMPL.MSIMPL;

@RestController
@RequestMapping("apiM")
public class Controlador {
	@Autowired
	private MSIMPL impl;
	
	@GetMapping
	@RequestMapping( value = "ConsultarMedicamentos", method = RequestMethod.GET)
	public ResponseEntity<?> ConsultarMedicamentos(){
		List<Medicamento> listaMed = this.impl.consultarMedicamento();
		return ResponseEntity.ok(listaMed);
	}
	
	@PostMapping
	@RequestMapping( value = "CrearMedicamento", method = RequestMethod.POST)
	public ResponseEntity<?> CrearMedicamento(@RequestBody Medicamento med){
		Medicamento medCreado = this.impl.CrearMedicamento(med);
		return ResponseEntity.status(HttpStatus.CREATED).body(medCreado);
	}
	
	@PutMapping
	@RequestMapping( value = "ModificarMedicamento", method = RequestMethod.PUT)
	public ResponseEntity<?> ModificarMedicamento(@RequestBody Medicamento med){
		Medicamento medModificado = this.impl.ModificarMedicamento(med);
		return ResponseEntity.status(HttpStatus.CREATED).body(medModificado);
	}
	
	@DeleteMapping
	@RequestMapping( value = "EliminarMedicamento/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<?> EliminarMedicamento(@PathVariable int id){
		this.impl.EliminarMedicamento(id);
		return ResponseEntity.ok().build();
	}
}
