package com.ms.msventa.service.VServiceIMPL;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ms.msventa.entity.Venta;
import com.ms.msventa.repository.VentaRepo;
import com.ms.msventa.service.VentaService;


@Service
public class VSIMPL implements VentaService{
	
	@Autowired
	public VentaRepo repo;

	@Override
	public List<Venta> consultarVenta() {
		// TODO Auto-generated method stub
		return (List<Venta>) this.repo.findAll();
	}

	@Override
	public Venta CrearVenta(Venta venta) {
		// TODO Auto-generated method stub
		venta.setMedicamento(venta.getMedicamento());
		return this.repo.save(venta);
	}
	
}
