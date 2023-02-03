package com.ms.msventa.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ms.msventa.entity.Venta;
import com.ms.msventa.service.VServiceIMPL.VSIMPL;

@RestController
@RequestMapping("apiV")
public class Controlador {
	
	@Autowired
	public VSIMPL impl;
	
	@GetMapping
	@RequestMapping( value = "ConsultarVentas", method = RequestMethod.GET)
	public ResponseEntity<?> ConsultarVentas(){
		List<Venta> listaVenta = this.impl.consultarVenta();
		return ResponseEntity.ok(listaVenta);
	}
	
	@PostMapping
	@RequestMapping( value = "CrearVenta", method = RequestMethod.POST)
	public ResponseEntity<?> CrearVenta(@RequestBody Venta venta){
		Venta ventaCreada = this.impl.CrearVenta(venta);
		return ResponseEntity.status(HttpStatus.CREATED).body(ventaCreada);
	}

}
