package com.ms.msventa.service;

import java.util.List;

import com.ms.msventa.entity.Venta;


public interface VentaService {
	
	public List<Venta> consultarVenta();
	
	public Venta CrearVenta(Venta venta);
}
